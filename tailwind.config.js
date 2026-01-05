module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // important for Tailwind v2
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          text: "#343636",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}