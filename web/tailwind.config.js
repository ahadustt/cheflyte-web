const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#213F33',
        'brand-sage': '#5D745E',
        'brand-cream': '#EFEBD4',
        'brand-mustard': '#D7A946',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: '0.5rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
} 