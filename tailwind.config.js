/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter_regular: ["Inter_18pt-Regular", "sans-serif"],
        inter_bold: ["Inter_18pt-Bold", "sans-serif"],
        poppins_regular: ["Poppins-Regular", "sans-serif"],
        poppins_black: ["Poppins-Black", "sans-serif"],
        poppins_bold: ["Poppins-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
