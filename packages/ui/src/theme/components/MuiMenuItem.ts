import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        '&:hover': {
          backgroundColor: theme.palette.background.elementHover,
        },
      };
    },
  },
};

export default MuiMenuItem;
