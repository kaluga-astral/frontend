import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiListItemText: Components<Theme>['MuiListItemText'] = {
  styleOverrides: {
    root() {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        textOverflow: 'ellipsis',
      };
    },
  },
};
