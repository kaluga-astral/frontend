import { LabComponents } from '@mui/lab/themeAugmentation';

import { Theme } from './../baseTheme';

export const MuiPickersDay: LabComponents['MuiPickersDay'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        width: 41,
        height: 32,
        margin: 0,
        color: theme.palette.grey[900],
        fontSize: theme.typography.link.fontSize,
        fontWeight: theme.typography.fontWeightRegular,
        borderRadius: theme.shape.small,
        '&.MuiPickersDay-today': {
          border: 0,
          fontWeight: theme.typography.fontWeightMedium,
          '&:before': {
            content: '""',
            position: 'absolute',
            height: 2,
            width: 33,
            background: theme.palette.primary[900],
            bottom: theme.spacing(1),
          },
          '&.Mui-selected': {
            '&:before': {
              background: theme.palette.primary[200],
            },
          },
        },
        '&.Mui-selected': {
          fontWeight: theme.typography.fontWeightRegular,
        },
        '&.Mui-focusVisible': {
          background: theme.palette.primary[200],
        },
        '&.MuiPickersDay-dayOutsideMonth': {
          color: theme.palette.grey[600],
        },
        '&.Mui-disabled': {
          color: theme.palette.grey[300],
          fontWeight: theme.typography.fontWeightRegular,
        },
      };
    },
  },
};
