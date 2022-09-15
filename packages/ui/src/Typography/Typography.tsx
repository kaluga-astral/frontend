import {
  Typography as MuiTypography,
  TypographyPropsVariantOverrides,
  TypographyTypeMap,
} from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';
import { Variant } from '@mui/material/styles/createTypography';
import React, { forwardRef, useMemo } from 'react';

import { Theme } from '../theme';

import { TypographyColors } from './enums';

export type TypographyColor = keyof typeof TypographyColors;

export type TypographyProps = Omit<
  OverrideProps<TypographyTypeMap, React.ElementType>,
  'variant' | 'color'
> & {
  variant?: Variant | keyof TypographyPropsVariantOverrides;
  component?: React.ElementType;
  color?: TypographyColor | ((theme: Theme) => string);
};

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

export const Typography: React.FC<TypographyProps> = forwardRef<
  HTMLElement,
  TypographyProps
>(({ children, color, ...props }, ref) => {
  const typographyColor = useMemo(() => {
    if (typeof color === 'function') {
      return color;
    }

    return (color && TypographyColors[color]) || color;
  }, [color]);

  return (
    <MuiTypography ref={ref} {...props} color={typographyColor}>
      {children}
    </MuiTypography>
  );
});

export default Typography;
