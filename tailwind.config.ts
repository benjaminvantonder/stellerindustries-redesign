/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core palette — monochrome base
        black: '#000000',
        white: '#FFFFFF',
        // Warm grays for depth
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
        // Gold accent
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4B95E',
          dim: '#9A7B30',
        },
        // Semantic tokens (CSS variable driven)
        surface: {
          DEFAULT: 'var(--color-surface)',
          raised: 'var(--color-surface-raised)',
        },
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        // Swiss-style type scale — thin weights, large display
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
        // 8pt grid system
        '0': '0',
        'px': '1px',
        '0.5': '0.125rem', // 2px
        '1': '0.25rem',    // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem',     // 8px — base unit
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '8': '2rem',       // 32px
        '10': '2.5rem',    // 40px
        '12': '3rem',      // 48px
        '16': '4rem',      // 64px
        '20': '5rem',      // 80px
        '24': '6rem',      // 96px
        '32': '8rem',      // 128px
        '40': '10rem',     // 160px
        '48': '12rem',     // 192px
        'section': 'clamp(5rem, 12vw, 10rem)',
        'section-lg': 'clamp(6rem, 15vw, 14rem)',
        'section-xl': 'clamp(8rem, 18vw, 16rem)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
      },
      borderWidth: {
        '0': '0',
        'thin': '0.5px',
        'DEFAULT': '1px',
        '2': '2px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'light': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
