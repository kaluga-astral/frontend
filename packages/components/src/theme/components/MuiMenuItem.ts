import { type Components, menuItemClasses } from '@mui/material';

import { type Theme } from '../types';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(2, 2, 2, 3),

        '&:hover': {
          backgroundColor: theme.palette.background.elementHover,
        },

        [`&.${menuItemClasses.selected}`]: {
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0, ${theme.palette.primary.main} 4px, ${theme.palette.primary['100']} 4px)`,
        },

        [`&.${menuItemClasses.gutters}`]: {
          minHeight: theme.spacing(8),
          padding: theme.spacing(1, 10, 1, 3),
        },

        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(3, 3, 4, 3),

          [`&.${menuItemClasses.gutters}`]: {
            padding: theme.spacing(3, 3, 4, 3),
          },
        },
      };
    },
  },
};

export default MuiMenuItem;
