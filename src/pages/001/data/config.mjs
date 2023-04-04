// @ts-check
import {createField} from '@myadbox/nebula-template-utils'

export default {
  fields: [
    createField.text({
      name: `start`,
      maxLength: 30,
      required: true,
      options: {
        label: `Start`,
      },
    }),
    createField.text({
      name: `brand`,
      maxLength: 30,
      required: true,
      options: {
        label: `Brand`,
      },
    }),
    createField.text({
      name: `end`,
      maxLength: 30,
      required: true,
      options: {
        label: `End`,
      },
    }),
    createField.text({
      name: `copy`,
      maxLength: 10,
      required: true,
      options: {
        label: `Copy`,
        details: `This is a detail tooltip`,
      },
    }),
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
  ],
}
