module.exports = {
  mode: 'jit',
  content: ['./*.html', './assets/js/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '48pct': '48%',
        '46pct': '46%',
        '54pct': '54%',
        '45pct': '45%',
        '55pct': '55%',
        '53pct': '53%',
        '47pct': '47%',
        '52pct': '52%',
        '51pct': '51%',
        '49pct': '49%',
    },
    colors: {
      'chartreuse': '#7fff00',
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
