module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
      },
      gridTemplateColumns: {
        'layout-2-1': '2fr 1fr', // ajout ici
      },
    },
  },
  plugins: [],
};