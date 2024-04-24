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
  error?: ColorShades;
  warning?: ColorShades;
  success?: ColorShades;
  brand: ColorBrand;
  primary: ColorShades;
};

const defaultBrandPalette: BrandColors = {
  primary: {
    900: '#0F52B8',
    800: '#2165CC',
    700: '#1874FF',
    600: '#2684FF',
    500: '#4C9AFF',
    400: '#70AEFF',
    300: '#94C2FF',
    200: '#C5DCFF',
    100: '#E1EDFF',
  },
  secondary: {
    800: '#55B8F0',
  },
  brand: {
    800: '#2165CC',
    background: '#FAFBFC',
  },
};

const edoPalette: BrandColors = {
  primary: {
    900: '#5D3FD4',
    800: '#6746EB',
    700: '#8566FF',
    600: '#9075FF',
    500: '#9D85FF',
    400: '#B29EFF',
    300: '#C2B2FF',
    200: '#E0D9FF',
    100: '#EFEBFF',
  },
  secondary: {
    800: '#5653FF',
  },
  brand: {
    800: '#6746EB',
    background: '#FAFBFC',
  },
};

const kedoPalette: BrandColors = {
  primary: {
    900: '#5D3FD4',
    800: '#6746EB',
    700: '#8566FF',
    600: '#9075FF',
    500: '#9D85FF',
    400: '#B29EFF',
    300: '#C2B2FF',
    200: '#E0D9FF',
    100: '#EFEBFF',
  },
  secondary: {
    800: '#5653FF',
  },
  brand: {
    800: '#6746EB',
    background: '#FAFBFC',
  },
};

const ao5Palette: BrandColors = {
  primary: {
    900: '#0068B2',
    800: '#0074C6',
    700: '#0989E3',
    600: '#2195E6',
    500: '#3AA1E9',
    400: '#52ACEB',
    300: '#84C4F1',
    200: '#C1E2F8',
    100: '#DFF0FB',
  },
  secondary: {
    800: '#14A5D3',
  },
  brand: {
    800: '#0074C6',
    background: '#FAFBFC',
  },
};

const ofdPalette: BrandColors = {
  primary: {
    900: '#1F78D6',
    800: '#2285EE',
    700: '#46A0FF',
    600: '#58A9FF',
    500: '#6BB3FF',
    400: '#7DBCFF',
    300: '#A2CFFF',
    200: '#D1E7FF',
    100: '#E7F3FF',
  },
  secondary: {
    800: '#22BDEE',
  },
  brand: {
    800: '#2285EE',
    background: '#FAFBFC',
  },
};

const signPalette: BrandColors = {
  primary: {
    900: '#325D89',
    800: '#376798',
    700: '#4D86BF',
    600: '#5E92C5',
    500: '#719ECC',
    400: '#82AAD2',
    300: '#A6C2DF',
    200: '#D3E1EF',
    100: '#E8EFF7',
  },
  secondary: {
    800: '#4099AC',
  },
  brand: {
    800: '#376798',
    background: '#FAFBFC',
  },
};

const lkpPalette: BrandColors = {
  primary: {
    900: '#009E71',
    800: '#00B07E',
    700: '#2CC89B',
    600: '#41CDA5',
    500: '#56D3AF',
    400: '#6BD8B9',
    300: '#95E3CD',
    200: '#CAF1E6',
    100: '#E3F8F2',
  },
  secondary: {
    800: '#00BDB2',
  },
  brand: {
    800: '#00B07E',
    background: '#FAFBFC',
  },
};

const poaPalette: BrandColors = {
  primary: {
    900: '#0A9DEF',
    800: '#33ADF2',
    700: '#4DB8F4',
    600: '#66C2F5',
    500: '#80CCF8',
    400: '#99D6F9',
    300: '#B3E1FB',
    200: '#CCEBFC',
    100: '#E6F5FE',
  },
  secondary: {
    800: '#2BCCFF',
  },
  brand: {
    800: '#33ADF2',
    background: '#FAFBFC',
  },
};

const rssPalette: BrandColors = {
  primary: {
    900: '#541B8D',
    800: '#663499',
    700: '#7A4EA6',
    600: '#8D67B2',
    500: '#A080C0',
    400: '#B399CC',
    300: '#C6B3D9',
    200: '#D9CCE5',
    100: '#ECE6F3',
  },
  secondary: {
    800: '#8B45D1',
  },
  brand: {
    800: '#663499',
    background: '#FAFBFC',
  },
};

const sberPalette: BrandColors = {
  primary: {
    900: '#005E7F',
    800: '#107F8C',
    700: '#21A19A',
    600: '#7AC7C2',
    500: '#90D0CC',
    400: '#ABDBD8',
    300: '#D3ECEB',
    200: '#E5FCF7',
    100: '#EEF8F7',
  },
  secondary: {
    800: '#107F8C',
  },
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

const lk1cPalette: BrandColors = {
  primary: {
    900: '#0559AD',
    800: '#087FF7',
    700: '#268FF9',
    600: '#6BB2FA',
    500: '#9CCCFC',
    400: '#BADCFD',
    300: '#D7EAFE',
    200: '#E7F3FF',
    100: '#F0F8FF',
  },
  secondary: {
    800: '#2EA32E',
  },
  brand: {
    800: '#FF5E5D',
    background: '#F9F4F2',
  },
};

const platformPalette: BrandColors = {
  primary: {
    900: '#1A83C7',
    800: '#3391CD',
    700: '#4D9ED4',
    600: '#66ACDA',
    500: '#80BAE0',
    400: '#99C8E6',
    300: '#B2D6EC',
    200: '#CCE3F3',
    100: '#E5F1F9',
  },
  secondary: {
    800: '#3ED1F5',
  },
  brand: {
    800: '#0088CB',
    background: '#FAFBFC',
  },
};

const ekoPalette: BrandColors = {
  primary: {
    900: '#1A68FF',
    800: '#0A7CFF',
    700: '#4D89FF',
    600: '#669AFF',
    500: '#80ABFF',
    400: '#99BCFF',
    300: '#B2CDFF',
    200: '#CCDDFF',
    100: '#E5EEFF',
  },
  secondary: {
    800: '#0A7CFF',
  },
  brand: {
    800: '#0A7CFF',
    background: '#F0F4FA',
  },
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
  [Brand.LK1C]: lk1cPalette,
  [Brand.PLATFORM]: platformPalette,
  [Brand.EKO]: ekoPalette,
};
