import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiStepConnector: Components<Theme>['MuiStepConnector'] = {
  styleOverrides: {
    lineHorizontal({ theme }) {
      return { borderTopWidth: 2, borderColor: theme.palette.grey[300] };
    },
  },
};
