import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiLoadingButton: Components<Theme>['MuiLoadingButton'] = {
  styleOverrides: {
    loading() {
      return {
        '&.Mui-disabled': {
          backgroundColor: 'red',
        },
      };
    },
  },
};
