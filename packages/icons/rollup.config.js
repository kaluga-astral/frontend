import esbuild, { minify } from 'rollup-plugin-esbuild';

export default {
  external: ['react', 'react/jsx-runtime', '@mui/material'],
  input: './index.ts',
  plugins: [minify(), esbuild()],
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
    },
  ],
};
