const EditorMiddleware = require('./packages/middleware')
const openInEditor = require('./packages/open-in-editor')

exports.createEditorLauncher = function (options = {}) {
  const middleware = new EditorMiddleware(options)

  return {
    setup: (app) => middleware.setup(app),
    middleware: middleware
  }
}

exports.openInEditor = openInEditor
