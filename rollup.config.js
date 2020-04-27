import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import sucrase from '@rollup/plugin-sucrase'
const isProduction = process.env.BUILD === 'production';

export default (async() => {
  console.log(isProduction);
  return {
    input: './src/index.ts',
    output: {
      name: 'rollup-learning-bundle',
      format: 'umd',
      dir: 'build',
      sourcemap: true,
    },
    plugins: [
      resolve({
        extensions: ['.js', '.ts'],
      }),
      commonjs(),
      sucrase({
        include: ['node_modules/d3-scale', 'src/**'],
        transforms: ['typescript'],
      }),
      isProduction && (await import('rollup-plugin-terser')).terser()
    ],
  }
})
