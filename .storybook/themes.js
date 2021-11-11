import baseTheme from '../packages/ui/theme/baseTheme'

export const themes = [
  {
    name: 'Base theme',
    theme: baseTheme
  }
]

export const getTheme = (name) => {
  return themes.find((theme) => theme.name === name).theme
}
