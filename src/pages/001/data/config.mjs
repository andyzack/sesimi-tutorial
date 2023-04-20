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
