import { ThemeProvider, Grid } from '../packages/components/src'
import { getTheme, themes } from './themes'

export default {
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={getTheme(context.globals.theme)}>
        <Grid container justifyContent="center" alignItems="center" autoFlow="column" spacing={4}>
          <Story {...context} />
        </Grid>
      </ThemeProvider>
    )
  ],
  globalTypes: {
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
  },
};
