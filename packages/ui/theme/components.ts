import { Components } from '@mui/material'

import UbuntuLight from '../fonts/Ubuntu/UbuntuLight.ttf'
import UbuntuRegular from '../fonts/Ubuntu/UbuntuRegular.ttf'
import UbuntuMedium from '../fonts/Ubuntu/UbuntuMedium.ttf'
import UbuntuBold from '../fonts/Ubuntu/UbuntuBold.ttf'

export default<Components> {
    MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Ubuntu';
            font-style: 'normal';
            font-weight: 300;
            src: url(${UbuntuLight}) format('truetype');
          }
          @font-face {
            font-family: 'Ubuntu';
            font-style: 'normal';
            font-weight: 400;
            src: url(${UbuntuRegular}) format('truetype');
          }
          @font-face {
            font-family: 'Ubuntu';
            font-style: 'normal';
            font-weight: 500;
            src: url(${UbuntuMedium}) format('truetype');
          }
          @font-face {
            font-family: 'Ubuntu';
            font-style: 'normal';
            font-weight: 700;
            src: url(${UbuntuBold}) format('truetype');
          }
        `
      },
      MuiTypography: {
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
}