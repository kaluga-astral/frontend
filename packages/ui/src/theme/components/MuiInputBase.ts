import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        '&.MuiInputBase-colorSuccess + .MuiFormHelperText-root': {
          color: theme.palette.green[800],
        },
      };
    },
  },
};

export default MuiInputBase;
