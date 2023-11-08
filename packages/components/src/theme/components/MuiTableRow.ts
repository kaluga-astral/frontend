import { Components } from '@mui/material';

import { Theme } from '../types';

export const MuiTableRow: Components<Theme>['MuiTableRow'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        '&.MuiTableRow-hover:hover': {
          backgroundColor: theme.palette.background.elementHover,
          cursor: 'pointer',
        },
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary['100'],
        },
      };
    },
  },
};
