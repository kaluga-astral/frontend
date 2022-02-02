import { Typography } from '@mui/material/styles/createTypography';
import { CSSProperties } from 'react';

const HTML_FONT_SIZE = 14;

type CustomTypographyVariantStyle = {
  fontSize: CSSProperties['fontSize'];
  fontWeight: CSSProperties['fontWeight'];
};

export type TypographyThemeOptions = Typography & {
  h7: CustomTypographyVariantStyle;
  h8: CustomTypographyVariantStyle;
  h9: CustomTypographyVariantStyle;
  ui: CustomTypographyVariantStyle;
  link: CustomTypographyVariantStyle;
  pointer: CustomTypographyVariantStyle;
  small: CustomTypographyVariantStyle;
  code: CustomTypographyVariantStyle;
};

// Т.к. нет досутпа к теме, написал функцию для конвертации px в rem
export const pxToRem = (
  fontSize: number,
  htmlFontSize: number = HTML_FONT_SIZE
): string => {
  return `${fontSize / htmlFontSize}rem`;
};

export const typography: Partial<TypographyThemeOptions> = {
  fontSize: 14,
  htmlFontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontFamily: ['Ubuntu', 'sans-serif'].join(','),
  get h1() {
    return {
      fontSize: pxToRem(35, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get h2() {
    return {
      fontSize: pxToRem(29, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get h3() {
    return {
      fontSize: pxToRem(24, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get h4() {
    return {
      fontSize: pxToRem(20, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get h5() {
    return {
      fontSize: pxToRem(16, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get h6() {
    return {
      fontSize: pxToRem(14, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get h7() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get h8() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get h9() {
    return {
      fontSize: pxToRem(11, this.htmlFontSize),
      fontWeight: this.fontWeightBold,
    };
  },
  get button() {
    return {
      fontSize: pxToRem(14, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get ui() {
    return {
      fontSize: pxToRem(14, this.htmlFontSize),
      fontWeight: this.fontWeightRegular,
    };
  },
  get link() {
    return {
      fontSize: pxToRem(14, this.htmlFontSize),
      fontWeight: this.fontWeightRegular,
    };
  },
  get pointer() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
    };
  },
  get small() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightRegular,
    };
  },
  get code() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightLight,
    };
  },
  body1: {
    fontSize: '1rem',
  },
};
