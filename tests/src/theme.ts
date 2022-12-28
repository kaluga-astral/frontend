import { Brand, createTheme } from '../../packages/components/src';

const fontsUrls = {
  bold: {
    woff: '',
    woff2: '',
  },
  light: {
    woff: '',
    woff2: '',
  },
  regular: {
    woff: '',
    woff2: '',
  },
  medium: {
    woff: '',
    woff2: '',
  },
};

export const theme = createTheme({ brand: Brand.DEFAULT, fontsUrls });
