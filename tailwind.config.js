/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ['"PP Radio Grotesk"', "sans-serif"], // Add the new font
      },
    },
  },
  plugins: [],
};
