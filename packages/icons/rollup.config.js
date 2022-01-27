import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  external: ['react', 'react/jsx-runtime', '@mui/material'],
  plugins: [typescript(), terser()],
  input: './src/index.tsx',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
    },
  ],
};
