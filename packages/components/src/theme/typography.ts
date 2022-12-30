import { Typography } from '@mui/material/styles/createTypography';
import { CSSProperties } from 'react';

const HTML_FONT_SIZE = 14;

type CustomTypographyVariantStyle = {
  fontSize: CSSProperties['fontSize'];
  fontWeight: CSSProperties['fontWeight'];
  lineHeight: CSSProperties['lineHeight'];
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
  htmlFontSize: number = HTML_FONT_SIZE,
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
      lineHeight: pxToRem(40, this.htmlFontSize),
    };
  },
  get h2() {
    return {
      fontSize: pxToRem(29, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
      lineHeight: pxToRem(32, this.htmlFontSize),
    };
  },
  get h3() {
    return {
      fontSize: pxToRem(24, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
      lineHeight: pxToRem(28, this.htmlFontSize),
    };
  },
  get h4() {
    return {
      fontSize: pxToRem(20, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
      lineHeight: pxToRem(24, this.htmlFontSize),
    };
  },
  get h5() {
    return {
      fontSize: pxToRem(16, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
      lineHeight: pxToRem(24, this.htmlFontSize),
    };
  },
  get h6() {
    return {
      fontSize: pxToRem(14, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
      lineHeight: pxToRem(16, this.htmlFontSize),
    };
  },
  get h7() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
      lineHeight: pxToRem(20, this.htmlFontSize),
    };
  },
  get h8() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
      lineHeight: pxToRem(16, this.htmlFontSize),
    };
  },
  get h9() {
    return {
      fontSize: pxToRem(11, this.htmlFontSize),
      fontWeight: this.fontWeightBold,
      lineHeight: pxToRem(16, this.htmlFontSize),
    };
  },
  get button() {
    return {
      fontSize: pxToRem(14, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
      lineHeight: pxToRem(24, this.htmlFontSize),
    };
  },
  get ui() {
    return {
      fontSize: pxToRem(14, this.htmlFontSize),
      fontWeight: this.fontWeightRegular,
      lineHeight: pxToRem(20, this.htmlFontSize),
    };
  },
  get link() {
    return {
      fontSize: pxToRem(14, this.htmlFontSize),
      fontWeight: this.fontWeightRegular,
      lineHeight: pxToRem(20, this.htmlFontSize),
    };
  },
  get pointer() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightMedium,
      lineHeight: pxToRem(16, this.htmlFontSize),
    };
  },
  get small() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightRegular,
      lineHeight: pxToRem(16, this.htmlFontSize),
    };
  },
  get code() {
    return {
      fontSize: pxToRem(12, this.htmlFontSize),
      fontWeight: this.fontWeightLight,
      lineHeight: pxToRem(20, this.htmlFontSize),
    };
  },
  body1: {
    fontSize: '1rem',
  },
};
