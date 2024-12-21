/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          900: '#3e2723',
          700: '#5d4037',
          500: '#795548',
        },
      },
      fontFamily: {
        custom: ['"CustomFontName"', 'sans-serif'], // Replace "CustomFontName" with your font's name
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate: 'rotate360 10s linear infinite',
      },
    },
  },
  plugins: [],
}