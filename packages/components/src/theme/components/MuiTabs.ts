import { type Components } from '@mui/material';

import { type Theme } from '../types';

export const MuiTabs: Components<Theme>['MuiTabs'] = {
  styleOverrides: {
    root() {
      return {
        minHeight: 38,
        height: 38,
      };
    },
    indicator({ theme }) {
      return {
        borderRadius: theme.shape.small,
      };
    },
  },
};
