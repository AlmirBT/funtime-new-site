/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blood': {
          50: '#1a0000',
          100: '#2d0000',
          200: '#400000',
          300: '#5c0000',
          400: '#9a0000',
          500: '#cc0000',
          600: '#ff1a1a',
          700: '#ff3333',
          800: '#ff4d4d',
          900: '#ff6666',
        },
        'crimson': {
          50: '#0d0000',
          100: '#1a0000',
          200: '#2d0000',
          300: '#400000',
          400: '#7a0000',
          500: '#b30000',
          600: '#e60000',
          700: '#ff1a1a',
          800: '#ff3333',
          900: '#ff4d4d',
        },
        'dark': {
          50: '#0a0a0a',
          100: '#0f0f0f',
          200: '#141414',
          300: '#1a1a1a',
          400: '#1f1f1f',
          500: '#242424',
          600: '#2a2a2a',
          700: '#2f2f2f',
          800: '#343434',
          900: '#3a3a3a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Manrope', 'system-ui', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(255, 26, 26, 0.6), 0 0 20px rgba(255, 26, 26, 0.4), 0 0 30px rgba(255, 26, 26, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 51, 51, 0.9), 0 0 50px rgba(255, 51, 51, 0.6), 0 0 70px rgba(255, 51, 51, 0.3)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
