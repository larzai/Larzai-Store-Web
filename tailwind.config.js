/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ptsans: ['PT Sans', 'sans-serif'],
      },
      colors: {
        turquoise: '#1b9f91',
      },
      backgroundColor: {
        turquoise: '#1b9f91',
      },
      backgroundColor: {
        turquoise2: '#18988b',
      },
    },
  },
  plugins: [],
}