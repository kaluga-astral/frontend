import { Components } from '@mui/material';

import { Theme } from '../baseTheme';

export const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    message({ theme }: { theme: Theme }) {
      return {
        paddingTop: `${theme.spacing(2)}`,
        paddingBottom: 0,
      };
    },
    action() {
      return {
        marginRight: 0,
      };
    },
  },
};
