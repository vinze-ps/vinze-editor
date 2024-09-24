import { defineConfig } from 'vite';
import * as path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'VinzeEditor',
      fileName: (format) => `vinze-editor.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
