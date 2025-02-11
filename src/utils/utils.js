function getEditor () {
  const args = process.argv.slice(2)
  const editorArg = args.find(arg => arg.startsWith('--editor='))
  return editorArg ? editorArg.split('=')[1] : process.env.EDITOR || 'code'
}

module.exports = {
  getEditor
}
