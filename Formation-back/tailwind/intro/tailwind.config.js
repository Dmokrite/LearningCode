module.exports = {
  mode: 'jit',
  content: ['./*.html', './assets/js/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'best-color': 'chartreuse',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
