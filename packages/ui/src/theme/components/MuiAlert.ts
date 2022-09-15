import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    filledSuccess({ theme }) {
      return {
        backgroundColor: theme.palette.success.light,
        color: theme.palette.text.primary,
        svg: {
          color: theme.palette.green['900'],
        },
      };
    },
    filledError({ theme }) {
      return {
        backgroundColor: theme.palette.error.light,
        color: theme.palette.text.primary,
        svg: {
          color: theme.palette.red['900'],
        },
      };
    },
    filledWarning({ theme }) {
      return {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.text.primary,
        svg: {
          color: theme.palette.yellow['900'],
        },
      };
    },
    filledInfo({ theme }) {
      return {
        backgroundColor: theme.palette.primary['100'],
        color: theme.palette.text.primary,
        svg: {
          // TODO: для варианта info в дизайн системе нет набора цветов, временно подвязался на primary
          // но в других темах цвета корявые
          color: theme.palette.primary['900'],
        },
      };
    },
    action({ theme }) {
      return {
        svg: {
          color: `${theme.palette.text.primary} !important`,
        },
      };
    },
  },
};
