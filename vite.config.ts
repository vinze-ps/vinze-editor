import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      root: '.',
      server: {
        open: true,
      },
      css: {
      },
    };
  } else {
    return {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/main.ts'),
          name: 'VinzeEditor',
          fileName: (format) => `vinze-editor.${format}.js`,
          formats: ['es', 'umd', 'iife'],
        },
        rollupOptions: {
          external: [],
          output: {
            globals: {},
          },
        },
        cssCodeSplit: true,
      },
    };
  }
});
