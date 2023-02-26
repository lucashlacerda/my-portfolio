/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oxygen: ['Oxygen'],
      },
      colors: {
        oxford: '#0E1C36',
        ivory: '#F9FBF2',
        'dark-purple': '#1F1A38',
        aero: '#4DBCE7',
        quartz: '#B49BB8',
        aquamarine: '#B5FFE9',
      },
    },
  },
  plugins: [],
};
