const launch = require('launch-editor')
const { getEditor } = require('../utils/utils')

/**
 * 在编辑器中打开指定文件
 * @param {string} fileName - 要打开的文件路径
 * @param {Object} [options] - 配置选项
 * @param {string} [options.editor] - 指定要使用的编辑器，如果不指定则使用默认编辑器
 * @param {number} [options.line=1] - 打开文件后光标所在的行号
 * @param {number} [options.column=1] - 打开文件后光标所在的列号
 * @throws {Error} 当打开文件失败时抛出错误
 */
function openInEditor (fileName, options = {}) {
  const editor = options.editor || getEditor()
  const line = options.line || 1
  const column = options.column || 1
  const fileLocation = `${fileName}:${line}:${column}`
  const onErrorCallback = options.onErrorCallback || ((fileName, err) => {
    console.log(`Editor Open File ${fileName} Error`, err)
  })

  try {
    launch(
      fileLocation,
      editor,
      onErrorCallback
    )
  } catch (err) {
    console.error('Editor Open File Error', err)
  }
}

module.exports = openInEditor
