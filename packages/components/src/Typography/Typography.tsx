import {
  Typography as MuiTypography,
  TypographyPropsVariantOverrides,
  TypographyTypeMap,
} from '@mui/material';
import { OverrideProps } from '@mui/material/OverridableComponent';
import { Variant } from '@mui/material/styles/createTypography';
import {
  DetailedHTMLProps,
  ElementType,
  ForwardedRef,
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useMemo,
} from 'react';

import { Theme } from '../theme';
// import { WithoutEmotionSpecific } from '../types';

import { TypographyColors } from './enums';

// import IntrinsicAttributes = React.JSX.IntrinsicAttributes;

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

//Добавляем нужные нам пропсы из mui и базовые HTML props
type TypographyPropsBase = Pick<
  OverrideProps<TypographyTypeMap, ElementType>,
  'paragraph' | 'noWrap' | 'align' | 'gutterBottom'
> &
  DetailedHTMLProps<HTMLAttributes<ElementType>, ElementType>;

export type TypographyProps = TypographyPropsBase & {
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
  ref?: ForwardedRef<HTMLElement>;
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

export const Typography = forwardRef<
  HTMLElement,
  PropsWithChildren<TypographyProps>
>(
  (
    { children, color, paragraph, colorIntensity = '800', component, ...props },
    ref,
  ) => {
    const Component = paragraph ? 'p' : component || 'span';

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
      <MuiTypography
        component={Component}
        ref={ref}
        {...props}
        color={typographyColor}
      >
        {children}
      </MuiTypography>
    );
  },
);

export default Typography;
