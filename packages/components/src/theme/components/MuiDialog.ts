import { type Components, backdropClasses, dialogClasses } from '@mui/material';

import { type Theme } from '../types';

export const MuiDialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        background: theme.palette.background.modalShadow,
        [`&.${dialogClasses.root} > .${backdropClasses.root}`]: {
          backgroundColor: 'unset',
        },
      };
    },
    paper({ theme }) {
      return {
        borderRadius: theme.shape.small,
      };
    },
  },
};
