import type { Components } from '@mui/material';

import type { Theme } from '../types';

export const MuiButtonBase: Components<Theme>['MuiButtonBase'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root({ theme }) {
      return {
        fontFamily: theme.typography.fontFamily,
      };
    },
  },
};
