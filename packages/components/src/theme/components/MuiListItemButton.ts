import { type Components } from '@mui/material';

import { type Theme } from '../types';

export const MuiListItemButton: Components<Theme>['MuiListItemButton'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        '&.Mui-selected': {
          color: theme.palette.primary[800],
          backgroundColor: theme.palette.grey[100],
        },
      };
    },
  },
};
