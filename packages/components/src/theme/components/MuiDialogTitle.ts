import { Components, buttonClasses } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiDialogTitle: Components<Theme>['MuiDialogTitle'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        padding: theme.spacing(6, 6, 4),
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
        lineHeight: theme.typography.h4.lineHeight,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [`& .${buttonClasses.root}`]: {
          marginLeft: theme.spacing(4),
          color: theme.palette.grey[800],
        },
      };
    },
  },
};
