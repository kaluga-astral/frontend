import { type Components } from '@mui/material';

import { type Theme } from '../types';

export const MuiDialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    paper({ theme }) {
      return {
        borderRadius: theme.shape.small,
      };
    },
  },
};
