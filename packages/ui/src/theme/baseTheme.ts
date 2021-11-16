import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
  ThemeOptions
} from '@mui/material/styles'
import { merge } from 'lodash-es'

import { typography } from './typography'
import { components } from './components'
export type { Theme } from '@mui/material/styles'

const themeOptions: ThemeOptions = {
  components,
  typography
}

export const createTheme = (options?: ThemeOptions) => {
  return responsiveFontSizes(createMuiTheme(merge({}, themeOptions, options)))
}
