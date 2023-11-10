import type { Components } from '@mui/material';

import type { Theme } from '../types';

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
