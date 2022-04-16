const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'

      },

      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],

      },
    },
  },
  plugins: [],
}
