// @ts-check
import {createField} from '@myadbox/nebula-template-utils'

export default {
  fields: [
    createField.select({
      name: `fontChoice`,
      options: {
        label: `Font choice`,
        details: `Select the layer for photo 2`,
        choices: [
          {value: `english`, label: `Volte Play English`},
          {value: `hindiVolt`, label: `Volte Play Devanagari`},
          {value: `hindiTiro`, label: `Tiro Devanagari Hindi`},
          {value: `tamil`, label: `Tiro Tamil`},
          {value: `bengali`, label: `Noto Sans Bengali`},
        ]
      }
    }),

    createField.text({
      name: `headline`,
      required: true,
      options: {
        label: `Headline`,
        details: `This is a detail tooltip`,
      },
    }),
    createField.number({
      name: `headlineSize`,
      options: {
        label: `Headline font size adjustment (rem)`,
        details: `Change this to scale font size up or down.`,
      },
    }),
    createField.number({
      name: `headlineTracking`,
      options: {
        label: `Headline tracking adjustment (tracking value * 0.01em)`,
        details: `Change this to scale font tracking up or down.`,
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
    createField.number({
      name: `copySize`,
      options: {
        label: `Copy font size adjustment (rem)`,
        details: `Change this to scale font size up or down.`,
      },
    }),
    createField.number({
      name: `copyTracking`,
      options: {
        label: `Copy tracking adjustment (tracking value * 0.01em)`,
        details: `Change this to scale font tracking up or down.`,
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
        label: `Photo 1 size adjustment (%)`,
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

    createField.select({
      name: `photo1Layer`,
      options: {
        label: `Photo 1 Layer`,
        details: `Select the layer for photo 1`,
        choices: [
          {value: 1, label: `Layer 1`},
          {value: 2, label: `Layer 2`},
          {value: 3, label: `Layer 3`},
          {value: 4, label: `Layer 4`},
        ]
      }
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
        label: `Photo 2 size adjustment (%)`,
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

    createField.select({
      name: `photo2Layer`,
      options: {
        label: `Photo 2 Layer`,
        details: `Select the layer for photo 2`,
        choices: [
          {value: 1, label: `Layer 1`},
          {value: 2, label: `Layer 2`},
          {value: 3, label: `Layer 3`},
          {value: 4, label: `Layer 4`},
        ]
      }
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
        label: `Photo 3 size adjustment (%)`,
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

    createField.select({
      name: `photo3Layer`,
      options: {
        label: `Photo 3 Layer`,
        details: `Select the layer for photo 3`,
        choices: [
          {value: 1, label: `Layer 1`},
          {value: 2, label: `Layer 2`},
          {value: 3, label: `Layer 3`},
          {value: 4, label: `Layer 4`},
        ]
      }
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
        label: `Photo 4 size adjustment (%)`,
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

    createField.select({
      name: `photo4Layer`,
      options: {
        label: `Photo 4 Layer`,
        details: `Select the layer for photo 4`,
        choices: [
          {value: 1, label: `Layer 1`},
          {value: 2, label: `Layer 2`},
          {value: 3, label: `Layer 3`},
          {value: 4, label: `Layer 4`},
        ]
      }
    }),

    createField.text({
      name: `cta`,
      required: true,
      options: {
        label: `CTA`,
        details: `This is a detail tooltip`,
      },
    }),
    createField.number({
      name: `ctaSize`,
      options: {
        label: `CTA font size adjustment (rem)`,
        details: `Change this to scale font size up or down.`,
      },
    }),
    createField.number({
      name: `ctaTracking`,
      options: {
        label: `CTA tracking adjustment (tracking value * 0.01em)`,
        details: `Change this to scale font tracking up or down.`,
      },
    }),

    createField.text({
      name: `footerHeadline`,
      options: {
        label: `Footer headline`,
        details: `This is a detail tooltip`,
      },
    }),
    createField.number({
      name: `footerHeadlineSize`,
      options: {
        label: `Footer headline font size adjustment (rem)`,
        details: `Change this to scale font size up or down.`,
      },
    }),
    createField.number({
      name: `footerHeadlineTracking`,
      options: {
        label: `Footer headline tracking adjustment (tracking value * 0.01em)`,
        details: `Change this to scale font tracking up or down.`,
      },
    }),

    createField.text({
      name: `footerCopy`,
      options: {
        label: `Footer copy`,
        details: `This is a detail tooltip`,
      },
    }),
    createField.number({
      name: `footerCopySize`,
      options: {
        label: `Footer copy font size adjustment (rem)`,
        details: `Change this to scale font size up or down.`,
      },
    }),
    createField.number({
      name: `footerCopyTracking`,
      options: {
        label: `Footer copy tracking adjustment (tracking value * 0.01em)`,
        details: `Change this to scale font tracking up or down.`,
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
    createField.number({
      name: `disclaimerSize`,
      options: {
        label: `Disclaimer font size adjustment (px)`,
        details: `Change this to scale font size up or down.`,
      },
    }),
    createField.number({
      name: `disclaimerTracking`,
      options: {
        label: `Disclaimer tracking adjustment (tracking value * 0.01em)`,
        details: `Change this to scale font tracking up or down.`,
      },
    }),
  ],
}
