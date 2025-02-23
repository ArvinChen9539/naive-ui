import { VNode } from 'vue'
declare function clear(): VNode
declare function success(): VNode
declare function warning(): VNode
declare function error(): VNode
declare function attach(): VNode
declare function trash(): VNode
declare function cancel(): VNode
declare function to(): VNode
export declare const icons: {
  clear: typeof clear
  success: typeof success
  warning: typeof warning
  error: typeof error
  attach: typeof attach
  trash: typeof trash
  cancel: typeof cancel
  to: typeof to
}
export {}
