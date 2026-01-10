/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f5',
          100: '#d4f1e8',
          200: '#a8e3d1',
          300: '#7cd5ba',
          400: '#50c7a3',
          500: '#2c8c64',
          600: '#1f6b4c',
          700: '#046d3c',
          800: '#035a31',
          900: '#024728',
        },
        accent: {
          50: '#faf9f7',
          100: '#f0ede8',
          200: '#e1dbd3',
          300: '#d2cabe',
          400: '#c3b9a9',
          500: '#acccbc',
          600: '#9dbb9a',
          700: '#8ea978',
          800: '#7f9756',
          900: '#708534',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
