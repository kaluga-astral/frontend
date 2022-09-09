import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiTab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        minWidth: 0,
        padding: `0 ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
        textTransform: 'none',
      };
    },
  },
};
