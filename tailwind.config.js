/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-bg)',
        secondary: 'var(--color-bg-secondary)',
        textPrimary: 'var(--color-text)',
        textSecondary: 'var(--color-text-secondary)',
        accent: 'var(--color-accent)',
        borderColors: 'var(--color-border)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
