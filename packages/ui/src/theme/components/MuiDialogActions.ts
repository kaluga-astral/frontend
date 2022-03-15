import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

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
