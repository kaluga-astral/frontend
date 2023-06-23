import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  TypographyPropsVariantOverrides,
} from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ElementType, HTMLAttributes, forwardRef, useMemo } from 'react';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentProp = ElementType<any>;

//Добавляем нужные нам пропсы из mui и базовые HTML props
type TypographyPropsBase = Pick<
  MuiTypographyProps,
  'paragraph' | 'noWrap' | 'align' | 'gutterBottom' | 'children'
>;

export type TypographyProps = TypographyPropsBase & {
  color?: TypographyColor;
  variant?: Variant | keyof TypographyPropsVariantOverrides;
  /**
   * @description интенсивность цвета, будет применена для цвета, у которого есть градации
   * @variation 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100
   * @default undefined
   * @example <Typography color="grey" colorIntensity="500" />
   */
  colorIntensity?: Intensity;
  component?: ComponentProp;
} & HTMLAttributes<HTMLParagraphElement>;

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

export const Typography = forwardRef<HTMLSpanElement, TypographyProps>(
  (
    { children, color, paragraph, colorIntensity = '800', component, ...props },
    ref,
  ) => {
    const typographyColor = useMemo(() => {
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
      <MuiTypography
        ref={ref}
        {...props}
        component={component as ComponentProp}
        color={typographyColor}
      >
        {children}
      </MuiTypography>
    );
  },
);
