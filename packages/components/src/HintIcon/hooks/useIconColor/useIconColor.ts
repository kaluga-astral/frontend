import { useMemo } from 'react';

import { useTheme } from '../../../theme';
import { IconColor } from '../../enums';

type UseIconColorParams = {
  color?: 'warning' | 'grey' | 'lightGrey';
};

export const useIconColor = ({ color }: UseIconColorParams) => {
  const theme = useTheme();

  return useMemo(() => {
    const colorName = color && IconColor[color];

    if (colorName) {
      switch (colorName) {
        case IconColor.warning:
          return theme.palette.yellow[800];
        case IconColor.grey:
          return theme.palette.grey[800];
        case IconColor.lightGrey:
          return theme.palette.grey[400];
        default:
          return theme.palette.grey[400];
      }
    }

    return theme.palette.grey[400];
  }, [color, theme]);
};
