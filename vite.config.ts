import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { rmSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Clear the dist directory before building
rmSync(resolve(__dirname, 'dist'), { recursive: true, force: true });

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // Preserve the original filenames
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]', // Preserve the original asset filenames
      },
    },
  },
  server: {
    open: true,
    port: 8900,
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
