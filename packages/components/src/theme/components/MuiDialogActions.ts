import type { Components } from '@mui/material';

import type { Theme } from '../types';

export const MuiDialogActions: Components<Theme>['MuiDialogActions'] = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        padding: theme.spacing(4, 6, 6, 6),

        '>div': {
          width: '100%',
        },
      };
    },
  },
};
