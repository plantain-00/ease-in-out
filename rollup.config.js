const { uglify } = require('rollup-plugin-uglify')
const resolve = require('@rollup/plugin-node-resolve')

module.exports = {
  input: 'dist/index.js',
  plugins: [resolve({ browser: true }), uglify()],
  output: {
    name: 'EaseInOut',
    file: 'dist/ease-in-out.min.js',
    format: 'umd'
  }
}
