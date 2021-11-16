import { createTheme } from '@astral/ui/src/theme'

export const themes = [
  {
    name: 'Base theme',
    theme: createTheme()
  }
]

export const getTheme = (name) => {
  return themes.find((theme) => theme.name === name).theme
}
