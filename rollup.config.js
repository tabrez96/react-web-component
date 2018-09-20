import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
  input: 'src/sidebar.js',
  external: ['react'],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    uglify.uglify()
  ],
  output: {
    format: 'umd',
    name: 'sidebar',
    globals: {
      react: "React"
    }
  }
}
export default config