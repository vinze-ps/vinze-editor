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
        // CSS
      },
    };
  } else {
    return {
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/main.ts'),
          name: 'MyTextEditor',
          fileName: (format) => `my-text-editor.${format}.js`,
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
