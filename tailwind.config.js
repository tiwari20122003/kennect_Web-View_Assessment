/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["*"],
  theme: {
    extend: {},
    colors: {
      'customGreen': '#004749',
      'customBack': '#047d80',
      'customButton': '#ff4261',
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [],
}


