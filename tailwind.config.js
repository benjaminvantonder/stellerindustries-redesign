/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6EE',
        ink: '#1A1A18',
        terracotta: '#C4724E',
        sage: '#7A8B6F',
        warmgray: '#B8AFA4',
        sand: '#E8E0D4',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        sans: ['Lora', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '68rem',
        prose: '40rem',
      },
      letterSpacing: {
        editorial: '0.08em',
        masthead: '0.18em',
      },
    },
  },
  plugins: [],
}
