/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "haken": ['"Hanken Grotesk"', 'sans-serif']
      },
      colors: {
        "orange-light": "rgb(249, 155, 125)",
        "maroon": "rgb(231, 97, 97)",
        "red-maroon": "rgb(176, 71, 89)"
      }
    },
  },
  plugins: [],
}