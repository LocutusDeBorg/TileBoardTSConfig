import typescript from 'rollup-plugin-typescript2';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'


export default {
  input: './src/config.ts',
  output:{
      file: '../TileBoard/config.js',
      format: 'iife',
      name: 'CONFIG',
      globals: {
        TileBoard:'window'
      }          
  },
  plugins: [
    typescript({
      tsconfig: "tsconfig.json"
    }),
    nodeResolve(),
    commonjs({
      namedExports:{
        'node_modules/cloner/build/cloner.node.js':['shallow']
      }
    })

  ],
  external: ['TileBoard']
}