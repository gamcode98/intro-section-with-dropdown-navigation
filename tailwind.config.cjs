/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'almost-white': 'hsl(0, 0%, 98%)',
      'medium-gray': 'hsl(0, 0%, 41%)',
      'medium-gray-opacity': 'hsla(0, 0%, 41%,0.6)',
      'almost-black': 'hsl(0, 0%, 8%)',
      white: 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      epilogue: ['Epilogue']
    }
  },
  plugins: []
}
