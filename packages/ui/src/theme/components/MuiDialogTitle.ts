import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiDialogTitle: Components<Theme>['MuiDialogTitle'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(6),
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
        lineHeight: theme.typography.h4.lineHeight,
        '& .ButtonUnstyled-root': {
          position: 'absolute',
          right: theme.spacing(5),
          top: theme.spacing(5),
          color: theme.palette.grey[800],
        },
      };
    },
  },
};
