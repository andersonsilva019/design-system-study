import {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  radii,
  space,
} from '@anderson-silva-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  createTheme,
  getCssText,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fonts,
    fontSizes,
    lineHeights,
    radii,
    space,
  },
})
