import { Components } from '@mui/material';

import { Theme } from '../types';

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
