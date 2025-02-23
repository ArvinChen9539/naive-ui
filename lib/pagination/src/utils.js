'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.createPageItemsInfo = void 0
function createPageItemsInfo(currentPage, pageCount, pageSlot) {
  let hasFastBackward = false
  let hasFastForward = false
  let fastBackwardTo = 1
  let fastForwardTo = pageCount
  if (pageCount === 1) {
    return {
      hasFastBackward: false,
      hasFastForward: false,
      fastForwardTo,
      fastBackwardTo,
      items: [
        {
          type: 'page',
          label: 1,
          active: currentPage === 1,
          mayBeFastBackward: false,
          mayBeFastForward: false
        }
      ]
    }
  }
  if (pageCount === 2) {
    return {
      hasFastBackward: false,
      hasFastForward: false,
      fastForwardTo,
      fastBackwardTo,
      items: [
        {
          type: 'page',
          label: 1,
          active: currentPage === 1,
          mayBeFastBackward: false,
          mayBeFastForward: false
        },
        {
          type: 'page',
          label: 2,
          active: currentPage === 2,
          mayBeFastBackward: true,
          mayBeFastForward: false
        }
      ]
    }
  }
  const firstPage = 1
  const lastPage = pageCount
  let middleStart = currentPage
  let middleEnd = currentPage
  const middleDelta = (pageSlot - 5) / 2
  middleEnd += Math.ceil(middleDelta)
  middleEnd = Math.min(
    Math.max(middleEnd, firstPage + pageSlot - 3),
    lastPage - 2
  )
  middleStart -= Math.floor(middleDelta)
  middleStart = Math.max(
    Math.min(middleStart, lastPage - pageSlot + 3),
    firstPage + 2
  )
  let leftSplit = false
  let rightSplit = false
  if (middleStart > firstPage + 2) leftSplit = true
  if (middleEnd < lastPage - 2) rightSplit = true
  const items = []
  items.push({
    type: 'page',
    label: 1,
    active: currentPage === 1,
    mayBeFastBackward: false,
    mayBeFastForward: false
  })
  if (leftSplit) {
    hasFastBackward = true
    fastBackwardTo = middleStart - 1
    items.push({
      type: 'fast-backward',
      active: false,
      label: undefined,
      options: createRange(firstPage + 1, middleStart - 1)
    })
  } else if (lastPage >= firstPage + 1) {
    items.push({
      type: 'page',
      label: firstPage + 1,
      mayBeFastBackward: true,
      mayBeFastForward: false,
      active: currentPage === firstPage + 1
    })
  }
  for (let i = middleStart; i <= middleEnd; ++i) {
    items.push({
      type: 'page',
      label: i,
      mayBeFastBackward: false,
      mayBeFastForward: false,
      active: currentPage === i
    })
  }
  if (rightSplit) {
    hasFastForward = true
    fastForwardTo = middleEnd + 1
    items.push({
      type: 'fast-forward',
      active: false,
      label: undefined,
      options: createRange(middleEnd + 1, lastPage - 1)
    })
  } else if (
    middleEnd === lastPage - 2 &&
    items[items.length - 1].label !== lastPage - 1
  ) {
    items.push({
      type: 'page',
      mayBeFastForward: true,
      mayBeFastBackward: false,
      label: lastPage - 1,
      active: currentPage === lastPage - 1
    })
  }
  if (items[items.length - 1].label !== lastPage) {
    items.push({
      type: 'page',
      mayBeFastForward: false,
      mayBeFastBackward: false,
      label: lastPage,
      active: currentPage === lastPage
    })
  }
  return {
    hasFastBackward,
    hasFastForward,
    fastBackwardTo,
    fastForwardTo,
    items
  }
}
exports.createPageItemsInfo = createPageItemsInfo
function createRange(from, to) {
  const range = []
  for (let i = from; i <= to; ++i) {
    range.push({
      label: `${i}`,
      value: i
    })
  }
  return range
}
