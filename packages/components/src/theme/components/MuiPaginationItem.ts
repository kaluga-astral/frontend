import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiPaginationItem: Components<Theme>['MuiPaginationItem'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        ['&.Mui-selected']: {
          backgroundColor: theme.palette.grey['900'],
          color: theme.palette.primary.contrastText,
        },
      };
    },
  },
};
