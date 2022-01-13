import { Brand } from '../constants';

type BrandColors = {
  secondary: string;
  dark: string;
  main: string;
  light: string;
  600: string;
  500: string;
  400: string;
  300: string;
  200: string;
  100: string;
};

const defaultBrandPalette: BrandColors = {
  secondary: '#55B8F0',
  dark: '#0F52B8',
  main: '#2165CC',
  light: '#1874FF',
  600: '#2684FF',
  500: '#4C9AFF',
  400: '#70AEFF',
  300: '#94C2FF',
  200: '#C5DCFF',
  100: '#E1EDFF',
};

const edoPalette: BrandColors = {
  secondary: '#5653FF',
  dark: '#5D3FD4',
  main: '#6746EB',
  light: '#8566FF',
  600: '#9D85FF',
  500: '#9D85FF',
  400: '#B29EFF',
  300: '#C2B2FF',
  200: '#E0D9FF',
  100: '#EFEBFF',
};

const ao5Palette: BrandColors = {
  secondary: '#14A5D3',
  dark: '#0068B2',
  main: '#0074C6',
  light: '#0989E3',
  600: '#2195E6',
  500: '#3AA1E9',
  400: '#52ACEB',
  300: '#84C4F1',
  200: '#C1E2F8',
  100: '#DFF0FB',
};

const ofdPalette: BrandColors = {
  secondary: '#22BDEE',
  dark: '#1F78D6',
  main: '#2285EE',
  light: '#46A0FF',
  600: '#58A9FF',
  500: '#6BB3FF',
  400: '#7DBCFF',
  300: '#A2CFFF',
  200: '#D1E7FF',
  100: '#E7F3FF',
};

const signPalette: BrandColors = {
  secondary: '#4099AC',
  dark: '#325D89',
  main: '#376798',
  light: '#4D86BF',
  600: '#5E92C5',
  500: '#719ECC',
  400: '#82AAD2',
  300: '#A6C2DF',
  200: '#D3E1EF',
  100: '#E8EFF7',
};

const lkpPalette: BrandColors = {
  secondary: '#00BDB2',
  dark: '#009E71',
  main: '#00B07E',
  light: '#2CC89B',
  600: '#41CDA5',
  500: '#56D3AF',
  400: '#6BD8B9',
  300: '#95E3CD',
  200: '#CAF1E6',
  100: '#E3F8F2',
};

export const brandPalette: Record<Brand, BrandColors> = {
  [Brand.DEFAULT]: defaultBrandPalette,
  [Brand.AO5]: ao5Palette,
  [Brand.EDO]: edoPalette,
  [Brand.OFD]: ofdPalette,
  [Brand.SIGN]: signPalette,
  [Brand.LKP]: lkpPalette,
};
