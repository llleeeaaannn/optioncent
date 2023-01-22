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
    },
  },
  plugins: [],
}
