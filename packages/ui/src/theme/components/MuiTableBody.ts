import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiTableBody: Components<Theme>['MuiTableBody'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        borderBottom: `2px solid ${theme.palette.grey['300']}`,
      };
    },
  },
};
