/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          light: '#FDFBF7',
          DEFAULT: '#F6F4EF',
          dark: '#EFECE4',
          subtle: '#E5E2D9',
        },
        ink: {
          DEFAULT: '#141414',
          secondary: '#363636',
          muted: '#686868',
          border: '#D9D5CC',
        },
        cobalt: {
          light: '#3D85FF',
          DEFAULT: '#176BFF',
          dark: '#0B53D1',
          glow: 'rgba(23, 107, 255, 0.15)',
        },
        cyanAccent: {
          light: '#8CE2FF',
          DEFAULT: '#55C8FF',
          dark: '#2AA5E0',
        },
        burgundy: {
          light: '#4A1220',
          DEFAULT: '#280A12',
          dark: '#19050B',
          noir: '#120408',
          surface: '#330D18',
        },
        magenta: {
          light: '#FF5EA9',
          DEFAULT: '#E11D74',
          dark: '#B80D59',
          glow: 'rgba(225, 29, 116, 0.25)',
        },
        forest: {
          light: '#1B4D43',
          DEFAULT: '#143A32',
          dark: '#0C2721',
          surface: '#112F28',
        },
        gold: {
          light: '#E2CA89',
          DEFAULT: '#C7A65B',
          dark: '#A6843A',
        },
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
