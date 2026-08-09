/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0A',
        surface: '#141414',
        elevated: '#1E1E1E',
        paper: '#F0F0F0',
        muted: '#6B6B6B',
        accent: '#3B82F6',
        'accent-hover': '#60A5FA',
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
