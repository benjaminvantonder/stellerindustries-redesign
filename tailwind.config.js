/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: 'var(--color-void)',
        surface: 'var(--color-surface)',
        'surface-raised': 'var(--color-surface-raised)',
        gold: 'var(--color-gold)',
        'gold-light': 'var(--color-gold-light)',
        'gold-dim': 'var(--color-gold-dim)',
        paper: 'var(--color-paper)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
        'border-subtle': 'var(--color-border-subtle)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.92', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-xl': ['clamp(2.75rem, 6vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 4vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-xl': ['clamp(1.125rem, 1.2vw, 1.25rem)', { lineHeight: '1.75', letterSpacing: '0' }],
        'body-lg': ['clamp(1rem, 1.1vw, 1.125rem)', { lineHeight: '1.75', letterSpacing: '0' }],
        'body': ['clamp(0.9375rem, 1vw, 1rem)', { lineHeight: '1.7', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'eyebrow': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.14em', fontWeight: '500' }],
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
      },
      maxWidth: {
        content: '72rem',
        reading: '40rem',
        narrow: '32rem',
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
        'section-lg': 'clamp(5rem, 12vw, 10rem)',
        'section-xl': 'clamp(6rem, 14vw, 12rem)',
        'gutter': '2rem',
      },
      gap: {
        'gutter': '2rem',
      },
    },
  },
  plugins: [],
}
