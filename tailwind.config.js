/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      gridTemplateColumns: {
        'layout-2-1': '2fr 1fr',
      },
    },
  },
  plugins: [],
}