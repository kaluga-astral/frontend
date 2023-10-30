import { Brand } from '../constants';

type ColorShades = {
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

export type ColorBrand = {
  background: string;
} & Pick<ColorShades, 800>;

type Secondary = Pick<ColorShades, 800>;

type BrandColors = {
  secondary: Secondary;
  red?: ColorShades;
  green?: ColorShades;
  yellow?: ColorShades;
  grey?: ColorShades;
  brand: ColorBrand;
} & ColorShades;

const defaultBrandPalette: BrandColors = {
  secondary: {
    800: '#55B8F0',
  },
  brand: {
    800: '#2165CC',
    background: '#FAFBFC',
  },
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
  secondary: {
    800: '#5653FF',
  },
  brand: {
    800: '#6746EB',
    background: '#FAFBFC',
  },
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
  secondary: {
    800: '#5653FF',
  },
  brand: {
    800: '#6746EB',
    background: '#FAFBFC',
  },
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
  secondary: {
    800: '#14A5D3',
  },
  brand: {
    800: '#0074C6',
    background: '#FAFBFC',
  },
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
  secondary: {
    800: '#22BDEE',
  },
  brand: {
    800: '#2285EE',
    background: '#FAFBFC',
  },
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
  secondary: {
    800: '#4099AC',
  },
  brand: {
    800: '#376798',
    background: '#FAFBFC',
  },
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
  secondary: {
    800: '#00BDB2',
  },
  brand: {
    800: '#00B07E',
    background: '#FAFBFC',
  },
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

const poaPalette: BrandColors = {
  secondary: {
    800: '#2BCCFF',
  },
  brand: {
    800: '#33ADF2',
    background: '#FAFBFC',
  },
  900: '#0A9DEF',
  800: '#33ADF2',
  700: '#4DB8F4',
  600: '#66C2F5',
  500: '#80CCF8',
  400: '#99D6F9',
  300: '#B3E1FB',
  200: '#CCEBFC',
  100: '#E6F5FE',
};

const rssPalette: BrandColors = {
  secondary: {
    800: '#8B45D1',
  },
  brand: {
    800: '#663499',
    background: '#FAFBFC',
  },
  900: '#541B8D',
  800: '#663499',
  700: '#7A4EA6',
  600: '#8D67B2',
  500: '#A080C0',
  400: '#B399CC',
  300: '#C6B3D9',
  200: '#D9CCE5',
  100: '#ECE6F3',
};

const sberPalette: BrandColors = {
  secondary: {
    800: '#107F8C',
  },
  900: '#005E7F',
  800: '#107F8C',
  700: '#21A19A',
  600: '#7AC7C2',
  500: '#90D0CC',
  400: '#ABDBD8',
  300: '#D3ECEB',
  200: '#E5FCF7',
  100: '#EEF8F7',
  brand: {
    800: '#107F8C',
    background: '#E4E8EB',
  },
  green: {
    900: '#278B86',
    800: '#21A19A',
    700: '#3CADA6',
    600: '#7AC7C2',
    500: '#A6D9D7',
    400: '#C1E5E3',
    300: '#DBF0EF',
    200: '#E9F6F5',
    100: '#F2FAF9',
  },
  red: {
    900: '#920C24',
    800: '#C11030',
    700: '#C92D49',
    600: '#DA7083',
    500: '#E69FAC',
    400: '#EEBCC5',
    300: '#F5D9DE',
    200: '#F9E8EB',
    100: '#FCF1F3',
  },
  yellow: {
    900: '#CC7A00',
    800: '#FF9900',
    700: '#FFA61F',
    600: '#FFC266',
    500: '#FFD699',
    400: '#FFE3B8',
    300: '#FFEED6',
    200: '#FFF5E6',
    100: '#FFF9F0',
  },
  grey: {
    900: '#1F1F22',
    800: '#565B62',
    700: '#7D838A',
    600: '#979CA1',
    500: '#A4A8AD',
    400: '#B2B8BF',
    300: '#D9DEE3',
    200: '#E4E8EB',
    100: '#F2F5F5',
  },
};

const platformPalette: BrandColors = {
  secondary: {
    800: '#3ED1F5',
  },
  brand: {
    800: '#0088CB',
    background: '#FAFBFC',
  },
  900: '#1A83C7',
  800: '#3391CD',
  700: '#4D9ED4',
  600: '#66ACDA',
  500: '#80BAE0',
  400: '#99C8E6',
  300: '#B2D6EC',
  200: '#CCE3F3',
  100: '#E5F1F9',
};

export const brandPalette: Record<Brand, BrandColors> = {
  [Brand.DEFAULT]: defaultBrandPalette,
  [Brand.AO5]: ao5Palette,
  [Brand.EDO]: edoPalette,
  [Brand.KEDO]: kedoPalette,
  [Brand.OFD]: ofdPalette,
  [Brand.SIGN]: signPalette,
  [Brand.LKP]: lkpPalette,
  [Brand.POA]: poaPalette,
  [Brand.RSS]: rssPalette,
  [Brand.SBER]: sberPalette,
  [Brand.PLATFORM]: platformPalette,
};
