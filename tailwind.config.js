/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['SF Pro Display', 'Helvetica Neue', 'Arial', 'sans-serif'],
        },
        colors: {
          'pastel-pink': '#FFD1DC',
          'pastel-blue': '#AEC6CF',
          'pastel-lilac': '#E6E6FA',
          'pastel-green': '#98FB98',
          'pastel-peach': '#FFDAB9',
          'pastel-yellow': '#FFFACD',
          'pastel-orange': '#FFE5B4',
        },
        animation: {
          'spin-slow': 'spin 20s linear infinite',
          'color-change': 'colorChange 60s infinite',
          'fade-in-out': 'fadeInOut 2s ease-in-out',
        },
        keyframes: {
          colorChange: {
            '0%, 100%': { backgroundColor: '#FFD1DC' },
            '14.28%': { backgroundColor: '#AEC6CF' },
            '28.57%': { backgroundColor: '#E6E6FA' },
            '42.85%': { backgroundColor: '#98FB98' },
            '57.14%': { backgroundColor: '#FFDAB9' },
            '71.42%': { backgroundColor: '#FFFACD' },
            '85.71%': { backgroundColor: '#FFE5B4' },
          },
          fadeInOut: {
            '0%, 100%': { opacity: '0' },
            '50%': { opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }
  
  