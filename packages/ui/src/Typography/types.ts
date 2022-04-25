import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h8: true;
    h9: true;
    ui: true;
    link: true;
    pointer: true;
    small: true;
    code: true;
    div: true;
  }
}

export type TypographyProps = Omit<MuiTypographyProps, 'variant'> & {
  variant?:
    | Variant
    | 'h7'
    | 'h8'
    | 'h9'
    | 'ui'
    | 'link'
    | 'pointer'
    | 'small'
    | 'code'
    | 'div';
};
