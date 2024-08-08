import { type Components } from '@mui/material';

import { type Theme } from '../types';

/**
 * Подставить нужную тень
 * @param {number|undefined} elevation - Значение пропса "elevation"
 * @param {Theme} theme - Объект темы
 * @return {string} Вернёт значение "box-shadow" из "theme"
 * @example
 * getShadow( 2, theme)
 */
const getShadow = (elevation: number | undefined, theme: Theme): string => {
  if (elevation === 0) {
    return 'none';
  }

  if (elevation === 1) {
    return theme.elevation['200'];
  }

  return theme.elevation['300'];
};

export const MuiPaper: Components<Theme>['MuiPaper'] = {
  styleOverrides: {
    elevation({ theme, ownerState: { elevation } }) {
      return {
        boxShadow: getShadow(elevation, theme),
      };
    },
    rounded({ theme }) {
      return {
        borderRadius: theme.shape.small,
      };
    },
  },
};
