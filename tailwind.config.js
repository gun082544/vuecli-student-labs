const colors = require('tailwindcss/colors')
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
        salmon: '#F7A399',
        red: colors.red,
        blue: colors.blue,
        green: colors.green
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
