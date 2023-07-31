import {
  PaletteOptions as MuiPaletteOptions,
  PaletteColorOptions,
} from '@mui/material';
import { TypeBackground } from '@mui/material/styles/createPalette';

import { Brand } from '../constants';

import { brandPalette } from './brandPalette';

export type Color = {
  900: string;
  800: string;
  700: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
};

export type PrimaryColorOptions = PaletteColorOptions & Color;

export type Background = TypeBackground & {
  element: string;
  elementHover: string;
  modalShadow: string;
};

type PaletteOptions = MuiPaletteOptions & {
  red: Color;
  green: Color;
  yellow: Color;
  grey: Color;
  primary: PrimaryColorOptions;
  background: Background;
};

export const getPalette = (brand: Brand = Brand.DEFAULT): PaletteOptions => {
  const brandColors = brandPalette[brand];

  return {
    red: {
      900: '#E64343',
      800: '#F24646',
      700: '#F35959',
      600: '#F67E7E',
      500: '#F79090',
      400: '#F8A3A3',
      300: '#FAB5B5',
      200: '#FCDADA',
      100: '#FEEDED',
    },
    green: {
      900: '#008055',
      800: '#00875A',
      700: '#19936A',
      600: '#4DAB8C',
      500: '#66B79C',
      400: '#80C3AC',
      300: '#99CFBD',
      200: '#CCE7DE',
      100: '#E6F3EF',
    },
    yellow: {
      900: '#ED8000',
      800: '#F98700',
      700: '#FA961F',
      600: '#FBAB4D',
      500: '#FBB766',
      400: '#FDCF99',
      300: '#FDDBB2',
      200: '#FBE6CC',
      100: '#FEF3E6',
    },
    primary: {
      main: brandColors[800],
      dark: brandColors[900],
      contrastText: '#FFF',
      ...brandColors,
    },
    secondary: {
      main: brandColors.secondary,
      dark: brandColors[900],
      contrastText: '#FFF',
    },
    get success() {
      return {
        light: this.green[100],
        main: this.green[600],
        dark: this.green[800],
        contrastText: '#FFF',
      };
    },
    get warning() {
      return {
        light: this.yellow[100],
        main: this.yellow[600],
        dark: this.yellow[800],
        contrastText: '#FFF',
      };
    },
    get error() {
      return {
        light: this.red[100],
        main: this.red[600],
        dark: this.red[800],
        contrastText: '#FFF',
      };
    },
    text: {
      primary: '#072D57',
      secondary: '#557192',
      disabled: '#99A9BA',
    },
    grey: {
      900: '#072D57',
      800: '#1D3F66',
      700: '#557192',
      600: '#778DA8',
      500: '#99A9BA',
      400: '#B7C2CE',
      300: '#DDE2E8',
      200: '#EBEEF1',
      100: '#F0F4F7',
    },
    background: {
      default: '#FFF',
      paper: '#FFF',
      element: '#FAFBFC',
      elementHover: '#EEF1F4',
      modalShadow: '#142A438A',
    },
  };
};
