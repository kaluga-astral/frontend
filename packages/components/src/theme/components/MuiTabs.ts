import { Components } from '@mui/material';

import { Theme } from '../types';

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
