/// <reference types="vitest" />

import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export const createVitestConfig = ({ useJsDOM }: { useJsDOM: boolean }) =>
  defineConfig({
    plugins: [react()],
    test: {
      globals: true,
      environment: useJsDOM ? 'jsdom' : 'node',
      setupFiles: useJsDOM
        ? path.resolve(__dirname, 'tests', 'vitest.setup.js')
        : undefined,
      testTimeout: 3000,
    },
  });
