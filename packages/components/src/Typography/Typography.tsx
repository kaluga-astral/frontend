import {
  type TypographyProps as MuiTypographyProps,
  type TypographyPropsVariantOverrides as TypographyPropsVariantOverridesMUI,
} from '@mui/material';
import { type Variant } from '@mui/material/styles/createTypography';
import {
  type ElementType,
  type HTMLAttributes,
  forwardRef,
  useMemo,
} from 'react';

import { type Theme } from '../theme';

import { TypographyColors } from './enums';
import { TypographyWrapper } from './styles';

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
  variant?: Variant | keyof TypographyPropsVariantOverridesMUI;
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
  /**
   * @description Верхний регистр дочерних элементов
   * @default false
   */
  isUpperCase?: boolean;
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
  ({ children, color, colorIntensity = '800', component, ...props }, ref) => {
    const typographyColor = useMemo(() => {
      // получаем название цвета по TypographyColors
      const colorName = color && TypographyColors[color];

      if (colorName) {
        return (theme: Theme) => {
          switch (colorName) {
            case TypographyColors.text:
              return theme.palette.text.primary;
            case TypographyColors.textSecondary:
              return theme.palette.text.secondary;
            default:
              return theme.palette[colorName]?.[colorIntensity] || colorName;
          }
        };
      }

      return;
    }, [color, colorIntensity]);

    return (
      <TypographyWrapper
        ref={ref}
        {...props}
        component={component as ComponentProp}
        color={typographyColor}
      >
        {children}
      </TypographyWrapper>
    );
  },
);
