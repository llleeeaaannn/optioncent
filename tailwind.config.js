/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': {'max':'640px'},
      // => @media (max-width: 640px) { ... }

      'md': {'max':'768px'},
      // => @media (max-width: 768px) { ... }

      'lg': {'max':'1024px'},
      // => @media (max-width: 1024px) { ... }

      'xl': {'max':'1280px'},
      // => @media (max-width: 1280px) { ... }

      '2xl': {'max':'1536px'}
      // => @media (max-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        'custom1': '0rem 0rem 1rem 0.5rem rgba(0, 0, 0, 0.10)',
      },
      fontFamily: {
        GTUltraFine: ['GT Ultra Fine', 'sans-serif'],
        Montserrat: ['Montserrat', 'sans-serif'],
        MontserratBold: ['Montserrat Bold', 'Montserrat', 'sans-serif'],
        MontserratLight: ['Montserrat Light', 'Montserrat', 'sans-serif'],
        MontserratBlack: ['Montserrat Black', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
