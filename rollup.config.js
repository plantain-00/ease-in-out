import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'dist/index.js',
  plugins: [resolve({ browser: true }), uglify()],
  output: {
    name: 'EaseInOut',
    file: 'dist/ease-in-out.min.js',
    format: 'umd'
  }
}
