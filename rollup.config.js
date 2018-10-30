import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'dist/index.js',
  name: 'EaseInOut',
  plugins: [resolve({ browser: true }), uglify()],
  output: {
    file: 'dist/ease-in-out.min.js',
    format: 'umd'
  }
}
