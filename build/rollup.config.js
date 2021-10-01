import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

module.exports = [
  {
    input: 'src/index.js',
    output: [
      {
        sourcemap: true,
        file: 'dist/index.js',
        format: 'es'
      }
    ],
    inlineDynamicImports: true,
    plugins: [
      vue({
        preprocessStyles: true,
        preprocessOptions: {
          scss: {
            additionalData: `
              @import 'dist/tokens/_variables.scss';
              @import 'dist/styles/styles.scss';
            `
          }
        }
      }),
      terser(),
      postcss()
    ]
  }
]