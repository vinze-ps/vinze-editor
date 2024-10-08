const prefixer = require('postcss-prefix-selector');

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    prefixer({
      prefix: '#vinze-editor',
      transform(prefix, selector, prefixedSelector) {
        if (selector === ':root' || selector.startsWith('html') || selector.startsWith('body') || selector === "#vinze-editor.container") {
          return selector;
        }
        return prefixedSelector;
      },
    }),
  ],
};
