import { type Components, backdropClasses, drawerClasses } from '@mui/material';

import { type Theme } from '../types';

export const MuiDrawer: Components<Theme>['MuiDrawer'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        [`&.${drawerClasses.root} > .${backdropClasses.root}`]: {
          backgroundColor: theme.palette.background.modalShadow,
        },
      };
    },
  },
};
