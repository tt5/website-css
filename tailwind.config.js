/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html, js}"],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {},
  },
  plugins: [],
  safelist: [
    'p-2',
  ],
}
