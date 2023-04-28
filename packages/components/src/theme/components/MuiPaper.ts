import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

const getShadow = (elevation: number | undefined, theme: Theme): string => {
  if (elevation === 2) {
    return theme.elevation['200'];
  }

  if (elevation === 3) {
    return theme.elevation['300'];
  }

  return 'none';
};

export const MuiPaper: Components<Theme>['MuiPaper'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        borderRadius: theme.spacing(2),
      };
    },
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
