const launchMiddleware = require('launch-editor-middleware')
const { getEditor } = require('../utils/utils')

class EditorMiddleware {
  constructor(options = {}) {
    this.options = Object.assign({
      route: '/__open-in-editor',
      editor: getEditor(),
      srcRoot: process.cwd(),
      onErrorCallback: (fileName, err) => {
        console.log(`Devtools Open File ${fileName} Error`, err)
      }
    }, options)
  }

  setup (app) {
    const { route, editor, srcRoot, onErrorCallback } = this.options

    app.use(route, launchMiddleware(
      editor,
      srcRoot,
      onErrorCallback
    ))
  }
}

module.exports = EditorMiddleware