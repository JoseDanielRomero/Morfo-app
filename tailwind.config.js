/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", "sans-serif"],
        inter: ["Inter Tight", "sans-serif"]
      }
    },
  },
  plugins: [],
}

