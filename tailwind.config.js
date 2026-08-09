/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#F8F9FA',
        surface: '#FFFFFF',
        elevated: '#F0F1F3',
        ink: '#1A1A1A',
        muted: '#6B7280',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        'accent-light': '#DBEAFE',
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
        'kinetic-accent': '0 4px 20px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [],
}
