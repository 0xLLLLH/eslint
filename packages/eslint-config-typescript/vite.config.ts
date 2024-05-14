
import { resolve } from 'node:path'

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
 resolve(__dirname, 'src/typescript.ts'),
        resolve(__dirname, 'src/recommended.ts'),
      ],
      formats: ['es', 'cjs'],
    },
  },
});
