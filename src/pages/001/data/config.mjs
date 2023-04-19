// @ts-check
import {createField} from '@myadbox/nebula-template-utils'

export default {
  fields: [
    createField.asset({
      name: `hero`,
      required: true,
      options: {
        label: `Hero`,
        details: `This is a hero image`,
        limitTo: [`ogilvy-test`],
        controls: [`crop`, `upload`], // optional
      },
    }),

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
