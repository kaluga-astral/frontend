import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiFormHelperText: Components<Theme>['MuiFormHelperText'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        display: 'flex',
        minHeight: theme.typography.small.lineHeight,
        fontSize: theme.typography.small.fontSize,
        margin: theme.spacing(1, 0, 0),
        lineHeight: theme.typography.small.lineHeight,
        '&.Mui-error': {
          color: theme.palette.error.dark,
        },
      };
    },
  },
};

export default MuiFormHelperText;
