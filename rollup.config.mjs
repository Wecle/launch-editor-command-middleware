import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync('./package.json'))

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
      banner: '#!/usr/bin/env node',
      preferConst: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'auto',
      sourcemap: true,
      preferConst: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    'child_process',
    'fs',
    'path'
  ],
  plugins: [
    json(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    }),
    terser()
  ]
}
