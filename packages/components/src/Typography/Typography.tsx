import {
  type TypographyProps as MuiTypographyProps,
  type TypographyVariant as MuiTypographyVariant,
  type TypographyPropsVariantOverrides as TypographyPropsVariantOverridesMUI,
} from '@mui/material';
import { type ElementType, type HTMLAttributes, forwardRef } from 'react';

import { type TypographyColors } from './enums';
import { TypographyWrapper } from './styles';
import { useTypographyColor } from './hooks';

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

type TypographyVariant = MuiTypographyVariant | 'inherit';

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
  variant?: TypographyVariant | keyof TypographyPropsVariantOverridesMUI;
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
    const typographyColor = useTypographyColor({ color, colorIntensity });

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
