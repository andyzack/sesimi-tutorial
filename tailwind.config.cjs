// @ts-check
import gridAreas from '@savvywombat/tailwindcss-grid-areas'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [`./{src,dist}/**/*.{js,jsx,ts,tsx,svg}`],
  theme: {
    fontFamily: {
      notoSansEnglish: [
        `"Noto Sans"`,
        `sans-serif`,
      ],
      lobster: [
        `"Lobster", cursive`,
      ],
      notoSansBengali: [
        `"Noto Sans Bengali"`,
        `sans-serif`,
      ],
      tiroDevanagari: [
        `"Tiro Devanagari"`,
        `serif`,
      ],
      tiroTamil: [
        `"Tiro Tamil"`,
        `serif`,
      ],
    },
    screens: {
      'min-02/10': { 'raw': `(min-aspect-ratio: 200 / 1000)` }, // Wide Skyscraper
      'min-04/10': { 'raw': `(min-aspect-ratio: 400 / 1000)` }, // Half Page Ad (Double MREC)
      'min-10/10': { 'raw': `(min-aspect-ratio: 1000 / 1000)` }, // Medium Rectangle (MREC)
      'min-60/10': { 'raw': `(min-aspect-ratio: 6000 / 1000)` }, // Mobile Leaderboard
      'min-80/10': { 'raw': `(min-aspect-ratio: 8000 / 1000)` }, // Leaderboard
    },
    extend: {
      colors: {
        'midnight-forest': `#03292d`,
        'electric-lime': `#d1ff3b`,
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
