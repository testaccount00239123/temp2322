/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#003366',
          light: '#3399FF',
        },
        secondary: {
          DEFAULT: '#4D4D4D',
          light: '#CCCCCC',
        },
      },
    },
  },
  plugins: [],
};