/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      backgroundBlendMode: {
        'overlay': 'overlay',
        'multiply': 'multiply',
        'screen': 'screen',
        // Puedes agregar más modos si lo necesitas
      },
    },
  },
  variants: {
    extend: {
      backgroundBlendMode: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

