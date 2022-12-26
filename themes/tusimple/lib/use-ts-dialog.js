'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useDialog = void 0
const naive_ui_1 = require('naive-ui')
const icons_1 = require('./icons')
function useDialog() {
  const dialog = (0, naive_ui_1.useDialog)()
  const extendedApi = {
    danger: (options) => {
      return dialog.error(
        Object.assign(Object.assign({}, options), {
          icon: icons_1.icons.warning,
          type: 'error'
        })
      )
    }
  }
  return Object.assign(extendedApi, dialog)
}
exports.useDialog = useDialog
