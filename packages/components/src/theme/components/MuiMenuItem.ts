import { Components, menuItemClasses } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(1.5, 10, 1.5, 3),

        '&:hover': {
          backgroundColor: theme.palette.background.elementHover,
        },
        [`&.${menuItemClasses.selected}`]: {
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0, ${theme.palette.primary.main} 4px, ${theme.palette.primary['100']} 4px)`,
        },
      };
    },
  },
};

export default MuiMenuItem;
