# launch-editor-command-middleware

一个用于在编辑器中打开文件的 node 中间件，支持自定义配置。

## 特性

- 支持通过命令行参数或环境变量配置默认编辑器
- 提供中间件功能，可以在开发服务器中集成
- 支持自定义路由路径
- 支持指定源代码根目录
- 提供错误回调处理

## 安装

```bash
npm install launch-editor-command-middleware
```

## 使用

### 指定编辑器

可以通过以下方式指定要使用的编辑器：

1. 命令行参数：`--editor=vim`
2. 环境变量：`EDITOR=vim`
3. 代码中直接指定：通过 options 参数传入

默认使用 VSCode。

### 在 devServer 配置中使用

```javascript
const express = require('express')
const { createEditorLauncher } = require('launch-editor-command-middleware')

const app = express()

createEditorLauncher().setup(app)
```

### 直接调用打开文件

```javascript
const { openInEditor } = require('launch-editor-command-middleware')

openInEditor('src/index.js')
```

## API 配置

### createEditorLauncher (options)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| options.editor | String | code | 可选，指定编辑器 |
| options.srcRoot | String | process.cwd() | 可选，源代码根目录 |
| options.onErrorCallback | Function | - | 可选，错误处理回调 |

### openInEditor (fileName, options)

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| fileName | String | - | 必填，要打开的文件路径 |
| options.editor | String | code | 可选，指定编辑器 |
| options.line | Number | 1 | 可选，指定行号 |
| options.column | Number | 1 | 可选，指定列号 |
| options.onErrorCallback | Function | - | 可选，错误处理回调 |
