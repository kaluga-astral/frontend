import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiFormHelperText: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    root({ theme }: { theme: any }) {
      return {
        margin: theme.spacing(1, 0, 0),
        lineHeight: theme.typography.pxToRem(16),
        '&.Mui-error': {
          color: theme.palette.error.dark,
        },
      };
    },
  },
};

export default MuiFormHelperText;
