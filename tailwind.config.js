module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // important for Tailwind v2
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}