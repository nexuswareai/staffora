/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6f8',
          100: '#e4e9f0',
          500: '#3b5b7e',
          800: '#1a334d',
          900: '#112233',
          950: '#0a141f',
        },
        accent: {
          400: '#dfb15b',
          500: '#d4af37',
          600: '#b08d29',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}