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
      colors: {
        'primary': `#5b2d87`,
        'secondary': `#e50075`,
        'tertiary': `#050606`,
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
