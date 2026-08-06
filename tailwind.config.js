/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0806',
        ink: {
          DEFAULT: '#17130C',
          900: '#17130C',
          800: '#1E1A12',
          700: '#252018',
          600: '#2C271E',
        },
        signal: {
          DEFAULT: '#C89B3C',
          300: '#D4AF5C',
          400: '#C89B3C',
          500: '#B8892E',
          600: '#A07820',
        },
        pulse: {
          DEFAULT: '#E8C468',
          300: '#F0D88A',
          400: '#E8C468',
          500: '#D4B04E',
        },
        paper: '#F7F3EC',
        mute: '#8A7F6B',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Switzer"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(200, 155, 60, 0.45)',
        'glow-sm': '0 0 18px -8px rgba(200, 155, 60, 0.4)',
        'pulse-glow': '0 0 30px -5px rgba(232, 196, 104, 0.6)',
      },
      keyframes: {
        'signal-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.02)' },
        },
        'chip-fade-in': {
          '0%': { opacity: '0', transform: 'translateX(-8px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'signal-pulse': 'signal-pulse 3s ease-in-out infinite',
        'chip-fade-in': 'chip-fade-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
