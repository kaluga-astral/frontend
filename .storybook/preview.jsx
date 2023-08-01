// emotion-theming нужен для: https://github.com/storybookjs/storybook/issues/10231#issuecomment-613394048

import { ThemeProvider } from '../packages/components/src'
import { getTheme, themes } from './themes'

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
