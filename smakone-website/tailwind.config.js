const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    
      backgroundColor :{
      'dark-blue' : '#000957',
      'dark-blue-hover' : '#03139e',
      'light-blue' : '#1D77FF',
    },
    backgroundImage: {
      'footer-image': "url('./Image/Background_Footer.webp')"
    },
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
      '8xl': '6rem',
      '9xl': '8rem'
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
