import { Components } from '@mui/material';

import { Theme } from '../types';

export const MuiTableHead: Components<Theme>['MuiTableHead'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        th: {
          borderBottom: `2px solid ${theme.palette.grey['300']}`,
        },
      };
    },
  },
};
