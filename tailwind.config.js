/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: '950px',
    },
    extend: {
      gridTemplateColumns: {
        custom: '.5fr 1fr',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
