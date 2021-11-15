import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import typography from './typography'
import components from './components'

const theme = createTheme({
  components,
  typography
})

export default responsiveFontSizes(theme)
