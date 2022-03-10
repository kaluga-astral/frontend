import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiDialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    root() {
      return {
        background: 'rgba(20, 42, 67, 0.54)',
      };
    },
    paper({ theme }: { theme: Theme }) {
      return {
        borderRadius: theme.shape.small,
      };
    },
  },
};
