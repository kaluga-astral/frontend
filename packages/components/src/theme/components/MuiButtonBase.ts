import { Components } from '@mui/material';

import { Theme } from '../types';

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
