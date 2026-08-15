/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        warm: {
          50: '#FAF9F7',
          100: '#F5F3F0',
          200: '#E8E5E0',
          300: '#D4D0C8',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          950: '#0C0A09',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4B95E',
          dim: '#9A7B30',
        },
        surface: 'var(--color-surface)',
        muted: 'var(--color-muted)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.88', letterSpacing: '-0.04em', fontWeight: '100' }],
        'display-xl': ['clamp(3rem, 7vw, 7rem)', { lineHeight: '0.92', letterSpacing: '-0.03em', fontWeight: '200' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.025em', fontWeight: '200' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300' }],
        'display-sm': ['clamp(1.25rem, 2.5vw, 2rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '300' }],
        'body-xl': ['clamp(1.125rem, 1.2vw, 1.25rem)', { lineHeight: '1.75', letterSpacing: '0', fontWeight: '300' }],
        'body-lg': ['clamp(1rem, 1.1vw, 1.125rem)', { lineHeight: '1.75', letterSpacing: '0', fontWeight: '300' }],
        'body': ['clamp(0.9375rem, 1vw, 1rem)', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '300' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em', fontWeight: '300' }],
        'eyebrow': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.14em', fontWeight: '400' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '300' }],
      },
      maxWidth: {
        content: '80rem',
        reading: '40rem',
        narrow: '32rem',
      },
      spacing: {
        'section': 'clamp(5rem, 12vw, 10rem)',
        'section-lg': 'clamp(6rem, 15vw, 14rem)',
        'section-xl': 'clamp(8rem, 18vw, 16rem)',
      },
      borderRadius: {
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'organic-alt': '70% 30% 30% 70% / 70% 70% 30% 30%',
        'blob': '42% 58% 70% 30% / 45% 45% 55% 55%',
      },
      backdropBlur: {
        'glass': '20px',
        'glass-elevated': '30px',
        'bokeh': '40px',
        'bokeh-heavy': '60px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'organic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
