const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor :{
      'dark-blue' : '#000957'
    },
    fontFamily: {
      'sans': ['PT Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
