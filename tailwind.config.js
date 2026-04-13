/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0a0f16',
        cardBg: '#111822',
        accentRed: '#d9232e'
      }
    },
  },
  plugins: [],
}