/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
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
