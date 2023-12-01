import { type Components } from '@mui/material';

import { type Theme } from '../types';

export const MuiDialogContent: Components<Theme>['MuiDialogContent'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        padding: theme.spacing(0, 6),
      };
    },
  },
};
