/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: '#050508',
        charcoal: '#0b0c12',
        graphite: '#13141e',
        surface: '#181926',
        primary: {
          50: '#f4f6fd',
          100: '#e8ecfb',
          200: '#d5ddf8',
          300: '#b4c3f3',
          400: '#8ba0ec',
          500: '#687ee3',
          600: '#4f5fd7',
          DEFAULT: '#6366f1',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        heading: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
