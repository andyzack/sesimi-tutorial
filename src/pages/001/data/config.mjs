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
      required: true,
      options: {
        label: `Copy`,
        details: `This is a detail tooltip`,
      },
    }),
    createField.text({
      name: `letterSpacing`,
      options: {
        label: `Letter spacing`,
      },
    }),
    createField.select({
      name: `headlineFont`,
      options: {
        label: `Headline font choice`,
        details: `Choose correct font to display in headline`,
        choices: [
          {value: `style1`, label: `Noto Sans`},
          {value: `style2`, label: `Lobster`},
        ]
      }
    }),
    createField.select({
      name: `lang`,
      options: {
        label: `Subhead language font choice`,
        details: `Choose correct font to display in subheadline`,
        choices: [
          {value: `tamil`, label: `Tiro Tamil`},
          {value: `hindi`, label: `Tiro Devanagari Hindi`},
          {value: `bengali`, label: `Noto Sans Bengali`},
        ]
      }
    }),
  ],
}
