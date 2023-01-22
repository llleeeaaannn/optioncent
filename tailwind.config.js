/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
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
