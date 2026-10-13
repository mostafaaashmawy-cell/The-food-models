/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          wine: '#4E1420',
          wineDark: '#350B14',
          berry: '#BA2B43',
          crimson: '#BA2B43',
          roseBlush: '#F4EAEB',
          warmWhite: '#FAF8F5',
          darkSlate: '#1C1917',
          gold: '#D8B26E',
          goldLight: '#EACD96',
          goldDark: '#B88E44',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        arabic: ['"Readex Pro"', '"Cairo"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 50px -15px rgba(78, 20, 32, 0.12)',
        'luxury-hover': '0 30px 60px -15px rgba(186, 43, 67, 0.22)',
        'glow-crimson': '0 0 35px -5px rgba(186, 43, 67, 0.35)',
        'glow-gold': '0 0 30px -5px rgba(216, 178, 110, 0.3)',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
