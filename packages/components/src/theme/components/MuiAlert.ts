import { type Components } from '@mui/material';

import { type Theme } from '../types';

export const MuiAlert: Components<Theme>['MuiAlert'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        fontWeight: '400',
        padding: theme.spacing(3),
        '.MuiAlert-message > *:last-child:not(:empty):not(.MuiTypography-root)':
          {
            padding: theme.spacing(3, 0),
          },
        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(2, 4),
          '.MuiAlert-message > *:last-child:not(:empty):not(.MuiTypography-root)':
            {
              padding: 0,
            },
        },
      };
    },
    filledSuccess({ theme }) {
      return {
        backgroundColor: theme.palette.success.light,
        color: theme.palette.text.primary,
        '.MuiAlert-icon': {
          color: theme.palette.green['900'],
        },
      };
    },
    filledError({ theme }) {
      return {
        backgroundColor: theme.palette.error.light,
        color: theme.palette.text.primary,
        '.MuiAlert-icon': {
          color: theme.palette.red['900'],
        },
      };
    },
    filledWarning({ theme }) {
      return {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.text.primary,
        '.MuiAlert-icon': {
          color: theme.palette.yellow['900'],
        },
      };
    },
    filledInfo({ theme }) {
      return {
        backgroundColor: theme.palette.primary['100'],
        color: theme.palette.text.primary,
        '.MuiAlert-icon': {
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
