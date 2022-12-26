'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.useMessage = exports.useDialog = exports.TsConfigProvider = void 0
var TsConfigProvider_1 = require('./TsConfigProvider')
Object.defineProperty(exports, 'TsConfigProvider', {
  enumerable: true,
  get: function () {
    return __importDefault(TsConfigProvider_1).default
  }
})
var use_ts_dialog_1 = require('./use-ts-dialog')
Object.defineProperty(exports, 'useDialog', {
  enumerable: true,
  get: function () {
    return use_ts_dialog_1.useDialog
  }
})
var use_ts_message_1 = require('./use-ts-message')
Object.defineProperty(exports, 'useMessage', {
  enumerable: true,
  get: function () {
    return use_ts_message_1.useMessage
  }
})
