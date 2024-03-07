import { useMemo } from 'react';

import { TypographyColors } from '../../enums';
import { type TypographyColor } from '../../Typography';
import { useTheme } from '../../../theme';

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

type UseTypographyColorProps = {
  /**
   * Цвет текста
   * @default undefined
   */
  color?: TypographyColor;
  /**
   * Интенсивность цвета, будет применена для цвета, у которого есть градации
   * @default '800'
   */
  colorIntensity?: Intensity;
};

export const useTypographyColor = ({
  color,
  colorIntensity = '800',
}: UseTypographyColorProps) => {
  const theme = useTheme();

  return useMemo(() => {
    const colorName = color && TypographyColors[color];

    if (colorName) {
      switch (colorName) {
        case TypographyColors.text:
          return theme.palette.text.primary;
        case TypographyColors.textSecondary:
          return theme.palette.text.secondary;
        default:
          return theme.palette[colorName]?.[colorIntensity] || colorName;
      }
    }

    return undefined;
  }, [color, colorIntensity, theme]);
};
