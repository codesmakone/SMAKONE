const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor :{
      'dark-blue' : '#000957',
      'blue-500' : '#1D77FF',
      'blue-400' : '#60a5fa',
      'blue-700' : 'rgb(29 78 216)',
    },
    backgroundImage: {
      'footer-image': "url('./Image/Background_Footer.png')",
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5.5rem',
    },
    textUnderlineOffset: {
      12: '12px',
    },
    fontFamily: {
      'sans' : ['Roboto', defaultTheme.fontFamily.sans],
      'Product': ['Product-sans', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
