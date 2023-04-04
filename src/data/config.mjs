// @ts-check
import {allFormats, allSizes, defineConfig, embedSizes, Format} from '@myadbox/nebula-template-utils'

export default defineConfig({
  sizes: embedSizes({
    support: {
      categories: [allSizes.bannerAd.main],
    },
  }),
  defaultSize: allSizes.bannerAd.main.sizes.halfPageAd.label,
  formats: [Format.PDF, Format.GIF, Format.JPG, Format.PNG],
  fields: [],
})
