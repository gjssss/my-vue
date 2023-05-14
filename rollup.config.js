import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

export default {
  plugins: [commonjs(), typescript()],
  output: [
    {
      name: 'vue',
      format: 'es',
      file: './dist/my-vue.esm.js',
      sourcemap: true,
    },
  ],
  input: './src/index.ts',
}
