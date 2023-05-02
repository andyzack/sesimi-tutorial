// @ts-check
import gridAreas from '@savvywombat/tailwindcss-grid-areas'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [`./{src,dist}/**/*.{js,jsx,ts,tsx,svg}`],
  theme: {
    fontFamily: {
      VoltePlay: [
        `"Volte Play"`,
        `sans-serif`,
      ],
      VoltePlayDevanagari: [
        `"Volte Play Devanagari"`,
        `sans-serif`,
      ],
      NotoSansEnglish: [
        `"Noto Sans"`,
        `sans-serif`,
      ],
      NotoSansBengali: [
        `"Noto Sans Bengali"`,
        `sans-serif`,
      ],
      TiroDevanagari: [
        `"Tiro Devanagari"`,
        `serif`,
      ],
      TiroTamil: [
        `"Tiro Tamil"`,
        `serif`,
      ],
    },
    screens: {
      'min-12/10': { 'raw': `(min-aspect-ratio: 1200 / 1000)` },
    },
    extend: {
      fontSize: {
        'body': `1em`,
      },
      colors: {
        'tataplay-purple': `#5b2d87`,
        'tataplay-pink': `#e50075`,
        'tataplay-blue': `#6b00dd`,
        'tataplay-black': `#050606`,
        'tataplay-white': `#ffffff`,
      }
    },
  },
  plugins: [
    gridAreas
  ],
  variants: {
    gridTemplateAreas: [`responsive`]
  }
}

module.exports = config
