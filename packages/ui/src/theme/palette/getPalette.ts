import { PaletteOptions } from '@mui/material/styles/createPalette';

import { Brand } from '../../../types/brands';

import { brandColors } from './brandColors';

export const getPalette = (brand: Brand = Brand.DEFAULT): PaletteOptions => {
  const colors = brandColors[brand];

  return {
    primary: {
      main: colors.primary,
      contrastText: '#FFF',
      dark: colors.active,
    },
    secondary: {
      main: colors.secondary,
      dark: colors.active,
      contrastText: '#FFF',
    },
    success: {
      light: '#E6F3EF',
      main: '#4DAB8C',
      dark: '#00B54E',
      contrastText: '#FFF',
    },
    warning: {
      light: '#FEF3E6',
      main: '#FBAB4D',
      dark: '#F98700',
      contrastText: '#FFF',
    },
    error: {
      light: '#FEEDED',
      main: '#F67E7E',
      dark: '#F24646',
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
