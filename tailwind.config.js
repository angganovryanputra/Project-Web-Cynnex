/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#112240',
          900: '#0a192f',
        },
        teal: {
          500: '#64ffda',
        },
      },
    },
  },
  plugins: [],
};