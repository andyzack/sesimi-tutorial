// @ts-check
import {createField} from '@myadbox/nebula-template-utils'

export default {
  fields: [
    createField.text({
      name: `headline`,
      required: true,
      options: {
        label: `Headline`,
        details: `This is a detail tooltip`,
      },
    }),

    createField.text({
      name: `copy`,
      required: true,
      options: {
        label: `Copy`,
        details: `This is a detail tooltip`,
      },
    }),

    createField.text({
      name: `cta`,
      required: true,
      options: {
        label: `CTA`,
        details: `This is a detail tooltip`,
      },
    }),

    createField.asset({
      name: `photo1`,
      required: true,
      options: {
        label: `Photo 1`,
        details: `This is a photo shot image1`,
        limitTo: [`star tv celebrities`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.number({
      name: `photo1Height`,
      options: {
        label: `Photo 1 height adjustment (%)`,
        details: `Change this to scale photo size up or down.`,
      },
    }),

    createField.number({
      name: `photo1Vertical`,
      options: {
        label: `Photo 1 vertical alignment (px)`,
        details: `Change this to align photo vertically. Negative values for top alignment.`,
      },
    }),

    createField.number({
      name: `photo1Horizontal`,
      options: {
        label: `Photo 1 horizontal alignment (px)`,
        details: `Change this to align photo horizontally. Negative values for left alignment.`,
      },
    }),

    createField.number({
      name: `photo1Rotate`,
      options: {
        label: `Photo 1 rotate (deg)`,
        details: `Change this to rotate photo. Takes negative values for ani-clockwise rotation.`,
      },
    }),

    createField.asset({
      name: `photo2`,
      required: true,
      options: {
        label: `Photo 2`,
        details: `This is a photo shot image2`,
        limitTo: [`star tv celebrities`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.number({
      name: `photo2Height`,
      options: {
        label: `Photo 2 height adjustment (%)`,
        details: `Change this to scale photo size up or down.`,
      },
    }),

    createField.number({
      name: `photo2Vertical`,
      options: {
        label: `Photo 2 vertical alignment (px)`,
        details: `Change this to align photo vertically. Negative values for top alignment.`,
      },
    }),

    createField.number({
      name: `photo2Horizontal`,
      options: {
        label: `Photo 2 horizontal alignment (px)`,
        details: `Change this to align photo horizontally. Negative values for left alignment.`,
      },
    }),

    createField.number({
      name: `photo2Rotate`,
      options: {
        label: `Photo 2 rotate (deg)`,
        details: `Change this to rotate photo. Takes negative values for ani-clockwise rotation.`,
      },
    }),

    createField.asset({
      name: `photo3`,
      required: true,
      options: {
        label: `Photo 3`,
        details: `This is a photo shot image3`,
        limitTo: [`star tv celebrities`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.number({
      name: `photo3Height`,
      options: {
        label: `Photo 3 height adjustment (%)`,
        details: `Change this to scale photo size up or down.`,
      },
    }),

    createField.number({
      name: `photo3Vertical`,
      options: {
        label: `Photo 3 vertical alignment (px)`,
        details: `Change this to align photo vertically. Negative values for top alignment.`,
      },
    }),

    createField.number({
      name: `photo3Horizontal`,
      options: {
        label: `Photo 3 horizontal alignment (px)`,
        details: `Change this to align photo horizontally. Negative values for left alignment.`,
      },
    }),

    createField.number({
      name: `photo3Rotate`,
      options: {
        label: `Photo 3 rotate (deg)`,
        details: `Change this to rotate photo. Takes negative values for ani-clockwise rotation.`,
      },
    }),

    createField.asset({
      name: `photo4`,
      required: true,
      options: {
        label: `Photo 4`,
        details: `This is a photo shot image4`,
        limitTo: [`star tv celebrities`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.number({
      name: `photo4Height`,
      options: {
        label: `Photo 4 height adjustment (%)`,
        details: `Change this to scale photo size up or down.`,
      },
    }),

    createField.number({
      name: `photo4Vertical`,
      options: {
        label: `Photo 4 vertical alignment (px)`,
        details: `Change this to align photo vertically. Negative values for top alignment.`,
      },
    }),

    createField.number({
      name: `photo4Horizontal`,
      options: {
        label: `Photo 4 horizontal alignment (px)`,
        details: `Change this to align photo horizontally. Negative values for left alignment.`,
      },
    }),

    createField.number({
      name: `photo4Rotate`,
      options: {
        label: `Photo 4 rotate (deg)`,
        details: `Change this to rotate photo. Takes negative values for ani-clockwise rotation.`,
      },
    }),

    createField.asset({
      name: `partner1`,
      required: true,
      options: {
        label: `Partner 1`,
        details: `This is a Partner image`,
        limitTo: [`star tv logo`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.asset({
      name: `partner2`,
      required: true,
      options: {
        label: `Partner 2`,
        details: `This is a Partner image`,
        limitTo: [`star tv logo`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.asset({
      name: `partner3`,
      required: true,
      options: {
        label: `Partner 3`,
        details: `This is a Partner image`,
        limitTo: [`star tv logo`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.asset({
      name: `partner4`,
      required: true,
      options: {
        label: `Partner 4`,
        details: `This is a Partner image`,
        limitTo: [`star tv logo`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.asset({
      name: `partner5`,
      required: true,
      options: {
        label: `Partner 5`,
        details: `This is a Partner image`,
        limitTo: [`star tv logo`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.asset({
      name: `partner6`,
      required: true,
      options: {
        label: `Partner 6`,
        details: `This is a Partner image`,
        limitTo: [`star tv logo`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.asset({
      name: `partner7`,
      required: true,
      options: {
        label: `Partner 7`,
        details: `This is a Partner image`,
        limitTo: [`star tv logo`],
        controls: [`crop`, `upload`], // optional
      },
    }),

    createField.text({
      name: `disclaimer`,
      required: true,
      options: {
        label: `Disclaimer`,
        details: `This is a detail tooltip`,
      },
    }),
  ],
}
