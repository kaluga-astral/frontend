import { createTheme } from '@mui/material'
import { red, green } from '@mui/material/colors'

export const themes = [
  {
    name: 'theme-1',
    theme: createTheme({
      palette: {
        primary: { main: green[500] }
      }
    })
  },
  {
    name: 'theme-2',
    theme: createTheme({
      palette: { primary: { main: red[500] } }
    })
  }
]

export const getTheme = (name) => {
  return themes.find((theme) => theme.name === name).theme
}
