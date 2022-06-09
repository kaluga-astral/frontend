import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiTableRow: Components<Theme>['MuiTableRow'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        '&.MuiTableRow-hover:hover': {
          backgroundColor: theme.palette.background.elementHover,
          cursor: 'pointer',
        },
      };
    },
  },
};
