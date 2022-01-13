import { PaletteOptions } from '@mui/material/styles/createPalette';

import { Brand } from '../constants';

import { brandPalette } from './brandPalette';
import { green, red, yellow } from './colorsPalette';

export const getPalette = (brand: Brand = Brand.DEFAULT): PaletteOptions => {
  const brandColors = brandPalette[brand];

  return {
    primary: {
      main: brandColors.main,
      dark: brandColors.dark,
      contrastText: '#FFF',
    },
    secondary: {
      main: brandColors.secondary,
      dark: brandColors.dark,
      contrastText: '#FFF',
    },
    success: {
      light: green[100],
      main: green[600],
      dark: green[800],
      contrastText: '#FFF',
    },
    warning: {
      light: yellow[100],
      main: yellow[600],
      dark: yellow[800],
      contrastText: '#FFF',
    },
    error: {
      light: red[100],
      main: red[600],
      dark: red[800],
      contrastText: '#FFF',
    },
    text: {
      primary: '#072D57',
      secondary: '#072D57',
      disabled: '#99A9BA',
    },
    grey: {
      900: '#072D57',
      800: '#1D3F66',
      700: '#557192',
      650: '#778DA8',
      600: '#99A9BA',
      500: '#B7C2CE',
      300: '#DDE2E8',
      100: '#EBEEF1',
      50: '#F0F4F7',
    },
    background: {
      default: '#FFF',
      element: '#FAFBFC',
      elementHover: '#EBECF0',
    },
  };
};
