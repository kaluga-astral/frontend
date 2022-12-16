import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  styleOverrides: {
    root() {
      return {
        border: 'none',
      };
    },
  },
};
