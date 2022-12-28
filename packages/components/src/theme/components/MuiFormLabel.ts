import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiFormLabel: Components<Theme>['MuiFormLabel'] = {
  styleOverrides: {
    root() {
      return {
        position: 'relative',
        transform: 'none',
      };
    },
  },
};

export default MuiFormLabel;
