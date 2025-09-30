/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lavender': {
          50: '#faf7ff',
          100: '#f3edff',
          200: '#e9d8ff',
          300: '#d8b9ff',
          400: '#c084fc',
          500: '#a855f7',
        }
      }
    },
  },
  plugins: [],
};
