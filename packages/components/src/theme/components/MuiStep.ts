import { Components } from '@mui/material';

import { Theme } from '../types';

export const MuiStep: Components<Theme>['MuiStep'] = {
  styleOverrides: {
    horizontal({ theme }) {
      return {
        '&:first-child': {
          paddingLeft: 0,
        },
        padding: theme.spacing(0, 2.5),
      };
    },
  },
};