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

type Intensity = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100;

export type TypographyColor = keyof typeof TypographyColors;

export type TypographyProps = Omit<
  OverrideProps<TypographyTypeMap, React.ElementType>,
  'variant' | 'color'
> & {
  variant?: Variant | keyof TypographyPropsVariantOverrides;
  component?: React.ElementType;
  color?: TypographyColor | ((theme: Theme) => string);
  intensity?: Intensity;
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
>(({ children, color, intensity, ...props }, ref) => {
  const typographyColor = useMemo(() => {
    if (typeof color === 'function') {
      return color;
    }

    const colorName = (color && TypographyColors[color]) || color;

    if (colorName && typeof intensity === 'number') {
      return (theme: Theme) =>
        theme.palette[colorName]?.[intensity] || colorName;
    }

    return colorName;
  }, [color, intensity]);

  return (
    <MuiTypography ref={ref} {...props} color={typographyColor}>
      {children}
    </MuiTypography>
  );
});

export default Typography;
