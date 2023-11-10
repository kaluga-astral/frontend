import type { Components } from '@mui/material';

import type { Theme } from '../types';

export const MuiTableCell: Components<Theme>['MuiTableCell'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        border: 'none',
        padding: theme.spacing(1, 4),
        // 44px - минимальная высота ячейки, установленная в дизайн-системе
        height: 44,
      };
    },
  },
};
