import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiFormControl: Components<Theme>['MuiFormControl'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        paddingBottom: theme.spacing(5),
      };
    },
  },
};

export default MuiFormControl;
