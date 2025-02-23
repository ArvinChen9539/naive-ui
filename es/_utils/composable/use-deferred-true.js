import { ref, watch } from 'vue'
export function useDeferredTrue(valueRef, delay, shouldDelayRef) {
  if (!delay) return valueRef
  const delayedRef = ref(valueRef.value)
  let timerId = null
  watch(valueRef, (value) => {
    if (timerId !== null) window.clearTimeout(timerId)
    if (value === true) {
      if (shouldDelayRef && !shouldDelayRef.value) {
        delayedRef.value = true
      } else {
        timerId = window.setTimeout(() => {
          delayedRef.value = true
        }, delay)
      }
    } else {
      delayedRef.value = false
    }
  })
  return delayedRef
}
