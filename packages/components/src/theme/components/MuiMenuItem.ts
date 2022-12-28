import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(1.5, 10, 1.5, 3),

        '&:hover': {
          backgroundColor: theme.palette.background.elementHover,
        },
      };
    },
  },
};

export default MuiMenuItem;
