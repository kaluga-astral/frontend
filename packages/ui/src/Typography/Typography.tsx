import {
  Typography as MuiTypography,
  TypographyPropsVariantOverrides,
  TypographyTypeMap,
} from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';
import { Variant } from '@mui/material/styles/createTypography';
import React, { forwardRef, useMemo } from 'react';

import { Theme } from '../theme';
import { WithoutEmotionSpecific } from '../types';

import { TypographyColors } from './enums';

type Intensity =
  | '900'
  | '800'
  | '700'
  | '600'
  | '500'
  | '400'
  | '300'
  | '200'
  | '100';

export type TypographyColor = keyof typeof TypographyColors;

export type TypographyProps = Omit<
  OverrideProps<WithoutEmotionSpecific<TypographyTypeMap>, React.ElementType>,
  'variant' | 'color'
> & {
  variant?: Variant | keyof TypographyPropsVariantOverrides;
  component?: React.ElementType;
  color?: TypographyColor | ((theme: Theme) => string);
  /**
   * @description интенсивность цвета, будет применена для цвета, у которого есть градации
   * @variation 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100
   * @default undefined
   * @example <Typography color="grey" colorIntensity="500" />
   */
  colorIntensity?: Intensity;
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
>(({ children, color, colorIntensity, ...props }, ref) => {
  const typographyColor = useMemo(() => {
    if (typeof color === 'function') {
      return color;
    }

    const colorName = (color && TypographyColors[color]) || color;

    if (colorName && Boolean(colorIntensity)) {
      return (theme: Theme) =>
        theme.palette[colorName]?.[colorIntensity as string] || colorName;
    }

    return colorName;
  }, [color, colorIntensity]);

  return (
    <MuiTypography ref={ref} {...props} color={typographyColor}>
      {children}
    </MuiTypography>
  );
});

export default Typography;
