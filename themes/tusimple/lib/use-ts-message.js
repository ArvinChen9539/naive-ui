'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useMessage = void 0
const naive_ui_1 = require('naive-ui')
const icons_1 = require('./icons')
function useMessage() {
  const messageApi = (0, naive_ui_1.useMessage)()
  const extendedApi = {
    danger: (content, options) => {
      return messageApi.error(
        content,
        Object.assign(Object.assign({}, options), {
          icon: icons_1.icons.warning
        })
      )
    }
  }
  return Object.assign(extendedApi, messageApi)
}
exports.useMessage = useMessage
