import { Components } from '@mui/material';

import { Theme } from '../types';

export const MuiTab: Components<Theme>['MuiTab'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        minWidth: 0,
        padding: theme.spacing(0, 2),
        textTransform: 'none',
      };
    },
  },
};
