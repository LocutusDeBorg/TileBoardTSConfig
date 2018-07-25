import typescript from 'rollup-plugin-typescript2';

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
    })
  ],
  external: ['TileBoard']
}