import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiToggleButton: Components<Theme>['MuiToggleButton'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        textTransform: 'initial',
        padding: theme.spacing(1, 2),
        fontWeight: theme.typography.fontWeightMedium,
      };
    },
  },
};
