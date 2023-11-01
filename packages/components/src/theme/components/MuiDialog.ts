import { Components } from '@mui/material';

import { Theme } from '../types';

export const MuiDialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        background: theme.palette.background.modalShadow,
      };
    },
    paper({ theme }) {
      return {
        borderRadius: theme.shape.small,
      };
    },
  },
};
