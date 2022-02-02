// emotion-theming нужен для: https://github.com/storybookjs/storybook/issues/10231#issuecomment-613394048

import { ThemeProvider } from '@astral/ui'
import { getTheme, themes } from './themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={getTheme(context.globals.theme)}>
      <Story {...context} />
    </ThemeProvider>
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
