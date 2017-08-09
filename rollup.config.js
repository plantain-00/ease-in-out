import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'dist/index.js',
  dest: 'dist/ease-in-out.min.js',
  format: 'umd',
  moduleName: 'EaseInOut',
  plugins: [resolve(), uglify()]
}
