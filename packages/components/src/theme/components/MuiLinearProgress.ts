import { type Components } from '@mui/material';

import { type Theme } from '../types';

export const MuiLinearProgress: Components<Theme>['MuiLinearProgress'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        width: '100%',
        borderRadius: '4px',
        backgroundColor: theme.palette.grey[300],
      };
    },
    barColorPrimary({ theme }: { theme: Theme }) {
      return {
        backgroundColor: theme.palette.primary['800'],
      };
    },
  },
};

export default MuiLinearProgress;
