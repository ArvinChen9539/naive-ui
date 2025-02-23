'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.isSlotEmpty =
  exports.resolveWrappedSlotWithProps =
  exports.resolveWrappedSlot =
  exports.resolveSlotWithProps =
  exports.resolveSlot =
    void 0
const vue_1 = require('vue')
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!(0, vue_1.isVNode)(child)) {
      return true
    }
    if (child.type === vue_1.Comment) {
      return false
    }
    if (child.type === vue_1.Fragment && !ensureValidVNode(child.children)) {
      return false
    }
    return true
  })
    ? vnodes
    : null
}
/**
 * We shouldn't use the following functions with slot flags `_: 1, 2, 3`
 */
function resolveSlot(slot, fallback) {
  return (slot && ensureValidVNode(slot())) || fallback()
}
exports.resolveSlot = resolveSlot
function resolveSlotWithProps(slot, props, fallback) {
  return (slot && ensureValidVNode(slot(props))) || fallback(props)
}
exports.resolveSlotWithProps = resolveSlotWithProps
/**
 * Resolve slot with wrapper if content exists, no fallback
 */
function resolveWrappedSlot(slot, wrapper) {
  const children = slot && ensureValidVNode(slot())
  return wrapper(children || null)
}
exports.resolveWrappedSlot = resolveWrappedSlot
/*
 * Resolve slot with wrapper if content exists, no fallback
 */
function resolveWrappedSlotWithProps(slot, props, wrapper) {
  const children = slot && ensureValidVNode(slot(props))
  return wrapper(children || null)
}
exports.resolveWrappedSlotWithProps = resolveWrappedSlotWithProps
function isSlotEmpty(slot) {
  return !(slot && ensureValidVNode(slot()))
}
exports.isSlotEmpty = isSlotEmpty
