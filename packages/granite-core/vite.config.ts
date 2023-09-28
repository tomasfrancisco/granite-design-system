import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { fileURLToPath } from 'node:url';
import { glob } from 'glob';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ['src'], exclude: ['src/**/*.stories.{ts,tsx}'] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      name: '@tfrancisco.dev/granite-core',
      entry: [resolve(__dirname, 'src/index.ts')],
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob
          .sync('src/**/*.{ts,tsx}', {
            ignore: ['src/**/*.stories.{ts,tsx}', 'src/**/*.d.ts'],
          })
          .map((file) => [
            // 1. The name of the entry point
            // lib/nested/foo.js becomes nested/foo
            relative('src', file.slice(0, file.length - extname(file).length)),
            // 2. The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: '[name].[hash][extname]',
        entryFileNames(chunkInfo) {
          if (chunkInfo.name === 'index') {
            return '[name].js';
          }
          return '[name].[hash].js';
        },
        chunkFileNames: '[name].[hash][extname]',
        globals: {
          react: 'React',
        },
      },
    },
  },
});
