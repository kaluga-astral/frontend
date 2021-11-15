import { TypographyOptions } from "@mui/material/styles/createTypography";

const HTML_FONT_SIZE = 14;
const FONT_SIZE = 14;

const pxToRem = (fontSize: number, htmlFontSize: number): string => {
  return `${fontSize / htmlFontSize}rem`
};

export default<TypographyOptions> {
  pxToRem,
  htmlFontSize: HTML_FONT_SIZE,
  fontSize: FONT_SIZE,
  fontFamily: ['Ubuntu', 'sans-serif'].join(','),
  h1: {
    fontSize: pxToRem(35, HTML_FONT_SIZE),
    fontWeight: 500
  },
  h2: {
    fontSize: pxToRem(29, HTML_FONT_SIZE),
    fontWeight: 500
  },
  h3: {
    fontSize: pxToRem(24, HTML_FONT_SIZE),
    fontWeight: 500
  },
  h4: {
    fontSize: pxToRem(20, HTML_FONT_SIZE),
    fontWeight: 500
  },
  h5: {
    fontSize: pxToRem(16, HTML_FONT_SIZE),
    fontWeight: 500
  },
  h6: {
    fontSize: pxToRem(14, HTML_FONT_SIZE),
    fontWeight: 500
  },
  h7: {
    fontSize: pxToRem(12, HTML_FONT_SIZE),
    fontWeight: 500
  },
  h8: {
    fontSize: pxToRem(12, HTML_FONT_SIZE),
    fontWeight: 500
  },
  h9: {
    fontSize: pxToRem(11, HTML_FONT_SIZE),
    fontWeight: 700
  },
  button: {
    fontSize: pxToRem(14, HTML_FONT_SIZE),
    fontWeight: 500
  },
  ui: {
    fontSize: pxToRem(14, HTML_FONT_SIZE),
    fontWeight: 400
  },
  link: {
    fontSize: pxToRem(14, HTML_FONT_SIZE),
    fontWeight: 400
  },
  pointer: {
    fontSize: pxToRem(12, HTML_FONT_SIZE),
    fontWeight: 500
  },
  small: {
    fontSize: pxToRem(12, HTML_FONT_SIZE),
    fontWeight: 400
  },
  code: {
    fontSize: pxToRem(12, HTML_FONT_SIZE),
    fontWeight: 300
  }
}