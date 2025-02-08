const launchMiddleware = require('launch-editor-middleware')

class EditorMiddleware {
  constructor(options = {}) {
    const args = process.argv.slice(2)
    const editorArg = args.find(arg => arg.startsWith('--editor='))

    this.options = Object.assign({
      route: '/__open-in-editor',
      editor: editorArg ? editorArg.split('=')[1] : process.env.EDITOR || 'code',
      srcRoot: process.cwd(),
      onErrorCallback: (fileName, err) => {
        console.log(`Devtools Open File ${fileName} Error`, err)
      }
    }, options)
  }

  setup (app) {
    app.use(this.options.route, launchMiddleware(
      this.options.editor,
      this.options.srcRoot,
      this.options.onErrorCallback
    ))
  }
}

module.exports = EditorMiddleware