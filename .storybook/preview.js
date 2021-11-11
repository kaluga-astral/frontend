// emotion-theming нужен для: https://github.com/storybookjs/storybook/issues/10231#issuecomment-613394048

import { ThemeProvider } from 'emotion-theming'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme, themes } from './themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story, context) => (
    <MuiThemeProvider theme={getTheme(context.globals.theme)}>
      <ThemeProvider theme={getTheme(context.globals.theme)}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </MuiThemeProvider>
  )
]

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: themes[0].name,
    toolbar: {
      icon: 'circlehollow',
      items: themes.map((theme) => theme.name),
      showName: true
    }
  }
}
