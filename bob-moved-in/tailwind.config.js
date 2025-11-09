/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          900: '#0d0a1a',
          800: '#161223',
          700: '#1f1a36',
        },
        cobalt: {
          500: '#142b63',
          400: '#1f3f8a',
          300: '#3058b5',
        },
      },
      boxShadow: {
        glow: '0 0 45px rgba(124, 58, 237, 0.35)',
        frost: '0 0 45px rgba(255, 255, 255, 0.35)',
      },
      backgroundImage: {
        aurora:
          'linear-gradient(120deg, rgba(9, 17, 40, 0.9) 0%, rgba(0, 0, 0, 0.85) 45%), linear-gradient(-130deg, rgba(245, 247, 250, 0.38) 0%, rgba(0, 0, 0, 0.8) 55%)',
      },
    },
  },
  plugins: [],
}
