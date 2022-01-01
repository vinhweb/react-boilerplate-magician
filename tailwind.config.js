module.exports = {
  purge: {
    mode: 'all',
    content: ['./app/**/*.js', './app/**/*.ts', './app/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Futura', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
