import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        border: 'none',
        padding: theme.spacing(1, 4),
        height: 44,
      };
    },
  },
};
