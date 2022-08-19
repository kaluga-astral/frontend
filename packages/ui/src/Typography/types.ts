import { OverrideProps } from '@mui/material/OverridableComponent';
import {
  TypographyPropsVariantOverrides,
  TypographyTypeMap,
} from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';
import * as React from 'react';

import { Theme } from '../theme';

import { TypographyColors } from './enums';

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

export type TypographyColor = keyof typeof TypographyColors;

export type TypographyProps = Omit<
  OverrideProps<TypographyTypeMap, React.ElementType>,
  'variant' | 'color'
> & {
  variant?: Variant | keyof TypographyPropsVariantOverrides;
  component?: React.ElementType;
  color?: TypographyColor | ((theme: Theme) => string) | string;
};
