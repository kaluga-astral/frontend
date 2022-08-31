import { Brand } from '../constants';

type BrandColors = {
  secondary: string;
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

const defaultBrandPalette: BrandColors = {
  secondary: '#55B8F0',
  900: '#0F52B8',
  800: '#2165CC',
  700: '#1874FF',
  600: '#2684FF',
  500: '#4C9AFF',
  400: '#70AEFF',
  300: '#94C2FF',
  200: '#C5DCFF',
  100: '#E1EDFF',
};

const edoPalette: BrandColors = {
  secondary: '#5653FF',
  900: '#5D3FD4',
  800: '#6746EB',
  700: '#8566FF',
  600: '#9075FF',
  500: '#9D85FF',
  400: '#B29EFF',
  300: '#C2B2FF',
  200: '#E0D9FF',
  100: '#EFEBFF',
};

const kedoPalette: BrandColors = {
  secondary: '#5653FF',
  900: '#5D3FD4',
  800: '#6746EB',
  700: '#8566FF',
  600: '#9075FF',
  500: '#9D85FF',
  400: '#B29EFF',
  300: '#C2B2FF',
  200: '#E0D9FF',
  100: '#EFEBFF',
};

const ao5Palette: BrandColors = {
  secondary: '#14A5D3',
  900: '#0068B2',
  800: '#0074C6',
  700: '#0989E3',
  600: '#2195E6',
  500: '#3AA1E9',
  400: '#52ACEB',
  300: '#84C4F1',
  200: '#C1E2F8',
  100: '#DFF0FB',
};

const ofdPalette: BrandColors = {
  secondary: '#22BDEE',
  900: '#1F78D6',
  800: '#2285EE',
  700: '#46A0FF',
  600: '#58A9FF',
  500: '#6BB3FF',
  400: '#7DBCFF',
  300: '#A2CFFF',
  200: '#D1E7FF',
  100: '#E7F3FF',
};

const signPalette: BrandColors = {
  secondary: '#4099AC',
  900: '#325D89',
  800: '#376798',
  700: '#4D86BF',
  600: '#5E92C5',
  500: '#719ECC',
  400: '#82AAD2',
  300: '#A6C2DF',
  200: '#D3E1EF',
  100: '#E8EFF7',
};

const lkpPalette: BrandColors = {
  secondary: '#00BDB2',
  900: '#009E71',
  800: '#00B07E',
  700: '#2CC89B',
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
  [Brand.KEDO]: kedoPalette,
  [Brand.OFD]: ofdPalette,
  [Brand.SIGN]: signPalette,
  [Brand.LKP]: lkpPalette,
};
