// @ts-check

/** @type {import('tailwindcss').Config} */
const config = {
  content: [`./src/**/*.{js,jsx,ts,tsx,svg}`],
  theme: {
    extend: {
      colors: {
        'midnight-forest': `#03292d`,
        'electric-lime': `#d1ff3b`,
      }
    },
  },
  plugins: [],
}

module.exports = config
