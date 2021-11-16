import { Components } from '@mui/material'

import UbuntuBoldWoff from '../../fonts/Ubuntu/UbuntuBold.woff'
import UbuntuMediumWoff from '../../fonts/Ubuntu/UbuntuMedium.woff'
import UbuntuRegularWoff from '../../fonts/Ubuntu/UbuntuRegular.woff'
import UbuntuLightWoff from '../../fonts/Ubuntu/UbuntuLight.woff'

import UbuntuBoldWoff2 from '../../fonts/Ubuntu/UbuntuBold.woff2'
import UbuntuMediumWoff2 from '../../fonts/Ubuntu/UbuntuMedium.woff2'
import UbuntuRegularWoff2 from '../../fonts/Ubuntu/UbuntuRegular.woff2'
import UbuntuLightWoff2 from '../../fonts/Ubuntu/UbuntuLight.woff2'

const MuiCssBaseline: Components['MuiCssBaseline'] = {
  styleOverrides: `
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 300;
      font-display: swap;
      src: url(${UbuntuLightWoff2}) format('woff2'), url(${UbuntuLightWoff}) format('woff');
    }
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 400;
      font-display: swap;
      src: url(${UbuntuRegularWoff2}) format('woff2'), url(${UbuntuRegularWoff}) format('woff');
    }
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 500;
      font-display: swap;
      src: url(${UbuntuMediumWoff2}) format('woff2'), url(${UbuntuMediumWoff}) format('woff');
    }
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 700;
      font-display: swap;
      src: url(${UbuntuBoldWoff2}) format('woff2'), url(${UbuntuBoldWoff}) format('woff');
    }
  `
}

const MuiTypography: Components['MuiTypography'] = {
  variants: [
    {
      props: { variant: 'button' },
      style: {
        textTransform: 'capitalize'
      }
    },
    {
      props: { variant: 'link' },
      style: {
        // TODO: надо будет взять цвет из палитры, когда она будет готова
        color: '#1874FF',
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'underline'
        }
      }
    }
  ],
  defaultProps: {
    variantMapping: {
      link: 'a',
      code: 'code'
    }
  }
}

export const components: Components = {
  MuiCssBaseline,
  MuiTypography
}
