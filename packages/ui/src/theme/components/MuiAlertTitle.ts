import { Components } from '@mui/material';

import { Theme } from '../baseTheme';

export const MuiAlertTitle: Components<Theme>['MuiAlertTitle'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        fontSize: theme.typography.h5.fontSize,
      };
    },
  },
};
