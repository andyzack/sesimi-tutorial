// @ts-check
import {allSizes, defineConfig, embedSizes, Format, Quality, Unit} from '@myadbox/nebula-template-utils'

const customPressSize1 = {
  label: `Press 160mm x 250mm`,
  format: Format.PDF,
  quality: Quality.Maximum,
  unit: Unit.MM,
  width: `160`,
  height: `250`,
  exportDefaults: null,
}

const customPressSize2 = {
  label: `Press 329mm x 250mm`,
  format: Format.PDF,
  quality: Quality.Maximum,
  unit: Unit.MM,
  width: `329`,
  height: `250`,
  exportDefaults: null,
}

export default defineConfig({
  sizes: embedSizes({
    support: {
      specific: [customPressSize1, customPressSize2],
    },
  }),
  defaultSize: customPressSize1.label,
  formats: [Format.PDF, Format.GIF, Format.JPG, Format.PNG],
  fields: [],
})
