import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  TypographyPropsVariantOverrides,
} from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ElementType, PropsWithChildren, forwardRef, useMemo } from 'react';
import { SystemProps } from '@mui/system';

import { Theme } from '../theme';

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

// Убираем стилевые пропсы mui, например: justifyContent, alignItems, содержащиеся в SystemProps
type OmittedTypographyProps = Omit<
  MuiTypographyProps,
  keyof SystemProps<Theme> | 'sx' | 'classes' | 'variantMapping' | 'css'
>;

export interface TypographyProps extends OmittedTypographyProps {
  color?: TypographyColor | ((theme: Theme) => string);
  variant?: Variant | keyof TypographyPropsVariantOverrides;
  component?: ElementType;
  /**
   * @description интенсивность цвета, будет применена для цвета, у которого есть градации
   * @variation 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100
   * @default undefined
   * @example <Typography color="grey" colorIntensity="500" />
   */
  colorIntensity?: Intensity;
}

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

export const Typography = forwardRef<
  HTMLElement,
  PropsWithChildren<TypographyProps>
>(({ children, color, colorIntensity = '800', ...props }, ref) => {
  const typographyColor = useMemo(() => {
    if (typeof color === 'function') {
      return color;
    }

    // получаем название цвета по TypographyColors
    const colorName = color && TypographyColors[color];

    if (colorName) {
      return (theme: Theme) => {
        // если такой цвет есть в палитре, то ищем его intensity
        // или возвращаем main цвет (если для данного цвета не определены intensity)
        // или возвращаем значение colorName (например, необходимо для таких TypographyColor, как "textSecondary",
        // которые невозможно найти в palette потому-что поиск осуществляется по ключу "text.secondary")

        return (
          theme.palette[colorName]?.[colorIntensity as string] ||
          theme.palette[colorName]?.main ||
          colorName
        );
      };
    }

    return;
  }, [color, colorIntensity]);

  return (
    <MuiTypography ref={ref} {...props} color={typographyColor}>
      {children}
    </MuiTypography>
  );
});

export default Typography;
