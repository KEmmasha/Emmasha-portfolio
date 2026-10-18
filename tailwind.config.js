/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F17',
        surface: '#131720',
        'surface-secondary': '#161B22',
        primary: '#FFFFFF',
        secondary: '#94A3B8',
        muted: '#8B949E',
        accent: '#38BDF8',
        'accent-secondary': '#60A5FA',
        border: '#21262D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
