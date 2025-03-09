/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          50: '#F5E6E0',
          100: '#E6D5D0',
          200: '#D4B8B0',
          300: '#C49C90',
          400: '#A67F70',
          500: '#8B6150',
          600: '#704D40',
          700: '#553A30',
          800: '#3A2720',
          900: '#1F1410',
        }
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}