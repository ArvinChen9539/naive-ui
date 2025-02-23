'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.download =
  exports.matchType =
  exports.createSettledFileInfo =
  exports.getFilesFromEntries =
  exports.isFileSystemFileEntry =
  exports.isFileSystemDirectoryEntry =
  exports.environmentSupportFile =
  exports.createImageDataUrl =
  exports.isImageFile =
  exports.isImageFileType =
    void 0
const _utils_1 = require('../../_utils')
const isImageFileType = (type) => type.includes('image/')
exports.isImageFileType = isImageFileType
const getExtname = (url = '') => {
  const temp = url.split('/')
  const filename = temp[temp.length - 1]
  const filenameWithoutSuffix = filename.split(/#|\?/)[0]
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0]
}
const imageExtensionRegex = /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i
// Do not need File object
const isImageFile = (file) => {
  if (file.type) {
    return (0, exports.isImageFileType)(file.type)
  }
  const fileNameExtension = getExtname(file.name || '')
  if (imageExtensionRegex.test(fileNameExtension)) {
    return true
  }
  const url = file.thumbnailUrl || file.url || ''
  const urlExtension = getExtname(url)
  if (/^data:image\//.test(url) || imageExtensionRegex.test(urlExtension)) {
    return true
  }
  return false
}
exports.isImageFile = isImageFile
function createImageDataUrl(file) {
  return __awaiter(this, void 0, void 0, function* () {
    return yield new Promise((resolve) => {
      if (!file.type || !(0, exports.isImageFileType)(file.type)) {
        resolve('')
        return
      }
      resolve(window.URL.createObjectURL(file))
    })
  })
}
exports.createImageDataUrl = createImageDataUrl
exports.environmentSupportFile =
  _utils_1.isBrowser && window.FileReader && window.File
function isFileSystemDirectoryEntry(item) {
  return item.isDirectory
}
exports.isFileSystemDirectoryEntry = isFileSystemDirectoryEntry
function isFileSystemFileEntry(item) {
  return item.isFile
}
exports.isFileSystemFileEntry = isFileSystemFileEntry
function getFilesFromEntries(entries, directory) {
  return __awaiter(this, void 0, void 0, function* () {
    const fileAndEntries = []
    let _resolve
    let requestCallbackCount = 0
    function lock() {
      requestCallbackCount++
    }
    function unlock() {
      requestCallbackCount--
      if (!requestCallbackCount) {
        _resolve(fileAndEntries)
      }
    }
    function _getFilesFromEntries(entries) {
      entries.forEach((entry) => {
        if (!entry) return
        lock()
        if (directory && isFileSystemDirectoryEntry(entry)) {
          const directoryReader = entry.createReader()
          lock()
          directoryReader.readEntries(
            (entries) => {
              _getFilesFromEntries(entries)
              unlock()
            },
            () => {
              unlock()
            }
          )
        } else if (isFileSystemFileEntry(entry)) {
          lock()
          entry.file(
            (file) => {
              fileAndEntries.push({ file, entry, source: 'dnd' })
              unlock()
            },
            () => {
              unlock()
            }
          )
        }
        unlock()
      })
    }
    yield new Promise((resolve) => {
      _resolve = resolve
      _getFilesFromEntries(entries)
    })
    return fileAndEntries
  })
}
exports.getFilesFromEntries = getFilesFromEntries
function createSettledFileInfo(fileInfo) {
  const {
    id,
    name,
    percentage,
    status,
    url,
    file,
    thumbnailUrl,
    type,
    fullPath,
    batchId
  } = fileInfo
  return {
    id,
    name,
    percentage:
      percentage !== null && percentage !== void 0 ? percentage : null,
    status,
    url: url !== null && url !== void 0 ? url : null,
    file: file !== null && file !== void 0 ? file : null,
    thumbnailUrl:
      thumbnailUrl !== null && thumbnailUrl !== void 0 ? thumbnailUrl : null,
    type: type !== null && type !== void 0 ? type : null,
    fullPath: fullPath !== null && fullPath !== void 0 ? fullPath : null,
    batchId: batchId !== null && batchId !== void 0 ? batchId : null
  }
}
exports.createSettledFileInfo = createSettledFileInfo
/**
 * This is a rather simple version. I may fix it later to make it more accurate.
 * I've looked at https://github.com/broofa/mime, however it doesn't has a esm
 * version, so I can't simply use it.
 */
function matchType(name, mimeType, accept) {
  name = name.toLowerCase()
  mimeType = mimeType.toLocaleLowerCase()
  accept = accept.toLocaleLowerCase()
  const acceptAtoms = accept
    .split(',')
    .map((acceptAtom) => acceptAtom.trim())
    .filter(Boolean)
  return acceptAtoms.some((acceptAtom) => {
    if (acceptAtom.startsWith('.')) {
      // suffix
      if (name.endsWith(acceptAtom)) return true
    } else if (acceptAtom.includes('/')) {
      // mime type
      const [type, subtype] = mimeType.split('/')
      const [acceptType, acceptSubtype] = acceptAtom.split('/')
      if (acceptType === '*' || (type && acceptType && acceptType === type)) {
        if (
          acceptSubtype === '*' ||
          (subtype && acceptSubtype && acceptSubtype === subtype)
        ) {
          return true
        }
      }
    } else {
      // invalid type
      return true
    }
    return false
  })
}
exports.matchType = matchType
const download = (url, name) => {
  if (!url) return
  const a = document.createElement('a')
  a.href = url
  if (name !== undefined) {
    a.download = name
  }
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
exports.download = download
