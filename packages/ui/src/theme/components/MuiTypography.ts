import { Components } from '@mui/material';

export type FontsUrls = {
  bold: {
    woff: string;
    woff2: string;
  };
  light: {
    woff: string;
    woff2: string;
  };
  medium: {
    woff: string;
    woff2: string;
  };
  regular: {
    woff: string;
    woff2: string;
  };
};

export const MuiTypography: Components['MuiTypography'] = {
  variants: [
    {
      props: { variant: 'button' },
      style: {
        textTransform: 'capitalize',
      },
    },
  ],
  defaultProps: {
    // TODO: необходимо кастомизировать типы Components['MuiTypography']
    variantMapping: {
      link: 'a',
      code: 'code',
    } as any,
  },
};

export default MuiTypography;
