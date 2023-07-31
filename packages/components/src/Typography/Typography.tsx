import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  TypographyPropsVariantOverrides,
} from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ElementType, HTMLAttributes, forwardRef, useMemo } from 'react';

import { SimplePaletteColorOptions, Theme } from '../theme';

export type TypographyColor =
  | 'text'
  | 'secondary'
  | 'primary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | 'textSecondary'
  | 'grey'
  | 'red'
  | 'green'
  | 'yellow';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentProp = ElementType<any>;

//Добавляем нужные нам пропсы из mui
type TypographyPropsBase = Pick<
  MuiTypographyProps,
  'paragraph' | 'noWrap' | 'align' | 'gutterBottom' | 'children'
>;

export type TypographyProps = TypographyPropsBase & {
  /**
   * @description Цвет текста
   * @default undefined
   */
  color?: TypographyColor;
  /**
   * @description Применяет стили оформления темы
   * @default 'body1'
   */
  variant?: Variant | keyof TypographyPropsVariantOverrides;
  /**
   * @description Интенсивность цвета, будет применена для цвета, у которого есть градации
   * @default '800'
   */
  colorIntensity?: Intensity;
  /**
   * @description Тип HTML - элемента
   * @default 'p'
   */
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

const MAIN_PALETTE_COLOR = [
  'primary',
  'error',
  'success',
  'warning',
  'secondary',
  'info',
] as const;

export const Typography = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, color, colorIntensity = '800', component, ...props }, ref) => {
    const typographyColor = useMemo(() => {
      if (color) {
        return (theme: Theme) => {
          // если такой цвет есть в палитре, то ищем его intensity
          // или возвращаем main цвет (если для данного цвета не определены intensity)
          // или возвращаем значение colorName (например, необходимо для таких TypographyColor, как "textSecondary",
          // которые невозможно найти в palette потому-что поиск осуществляется по ключу "text.secondary")

          if (color === 'text') {
            return theme.palette.text.primary;
          }

          if (color === 'textSecondary') {
            return theme.palette.text.secondary;
          }

          if (MAIN_PALETTE_COLOR.includes(color)) {
            return (theme.palette[color] as SimplePaletteColorOptions).main;
          }

          return theme.palette[color][colorIntensity];
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
