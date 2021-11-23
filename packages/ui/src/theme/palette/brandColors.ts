import { Brand } from '../../../types/brands';

const baseColors = {
  active: '#0F52B8',
  primary: '#2165CC',
  hover: '#1874FF',
  secondary: '#55B8F0',
  bgActive: '#C5DCFF',
  bgHover: '#E1EDFF',
};

const edoColors = {
  active: '#5D3FD4',
  primary: '#6746EB',
  hover: '#8566FF',
  secondary: '#5653FF',
  bgActive: '#E0D9FF',
  bgHover: '#EFEBFF',
};

const ao5Colors = {
  active: '#0068B2',
  primary: '#0074C6',
  hover: '#0989E3',
  secondary: '#14A6D3',
  bgActive: '#C1E2F8',
  bgHover: '#DFF0FB',
};

const ofdColors = {
  active: '#1F78D6',
  primary: '#2285EE',
  hover: '#46A0FF',
  secondary: '#22BDEE',
  bgActive: '#D1E7FF',
  bgHover: '#E7F3FF',
};

const signColors = {
  active: '#325D89',
  primary: '#2165CC',
  hover: '#4D86BF',
  secondary: '#4199AC',
  bgActive: '#D3E1EF',
  bgHover: '#E8EFF7',
};

const lkpColors = {
  active: '#009E71',
  primary: '#00B07E',
  hover: '#2CC89B',
  secondary: '#00BDB2',
  bgActive: '#CAF1E6',
  bgHover: '#E3F8F2',
};

export const brandColors = {
  [Brand.DEFAULT]: baseColors,
  [Brand.AO5]: ao5Colors,
  [Brand.EDO]: edoColors,
  [Brand.OFD]: ofdColors,
  [Brand.SIGN]: signColors,
  [Brand.LKP]: lkpColors,
};
