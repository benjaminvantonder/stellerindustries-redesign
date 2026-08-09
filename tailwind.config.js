/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FEF8EF',
        surface: '#FFFFFF',
        ink: '#1F1F23',
        muted: '#6B7280',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        'kinetic': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'kinetic-hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
