const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
