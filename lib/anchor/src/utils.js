'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.getOffset = void 0
function getOffset(el, scrollTarget) {
  const { top: elTop, height } = el.getBoundingClientRect()
  const scrollTargetTop =
    scrollTarget instanceof HTMLElement
      ? scrollTarget.getBoundingClientRect().top
      : 0
  return {
    top: elTop - scrollTargetTop,
    height
  }
}
exports.getOffset = getOffset
