/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx}' ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
      },
      fontFamily: {
        poppins: ["Poppins"],
        abril: ["Abril Fatface"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
