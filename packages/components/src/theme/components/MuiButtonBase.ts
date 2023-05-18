import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

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
