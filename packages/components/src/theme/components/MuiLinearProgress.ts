import { type Components } from '@mui/material';

import { type Theme } from '../types';

export const MuiLinearProgress: Components<Theme>['MuiLinearProgress'] = {
  styleOverrides: {
    root() {
      return {
        width: '100%',
        borderRadius: '4px',
      };
    },
    bar: {
      backgroundColor: '#6746eb',
    },
  },
};

export default MuiLinearProgress;
