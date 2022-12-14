import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiMenu: Components<Theme>['MuiMenu'] = {
  defaultProps: {
    autoFocus: false,
  },
  styleOverrides: {
    paper({ theme }: { theme: Theme }) {
      return {
        marginTop: theme.spacing(2),
        '&.MuiPaper-root': {
          borderRadius: theme.shape.small,
          boxShadow: theme.elevation[200],
        },
      };
    },
    list({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(1, 0),
      };
    },
  },
};

export default MuiMenu;
