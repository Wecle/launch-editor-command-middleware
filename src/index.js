const EditorMiddleware = require('./middleware')

function createEditorLauncher (options = {}) {
  const middleware = new EditorMiddleware(options)

  return {
    setup: (app) => middleware.setup(app),
    middleware: middleware
  }
}

module.exports = {
  createEditorLauncher
}