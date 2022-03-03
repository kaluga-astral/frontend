import { LabComponents } from '@mui/lab/themeAugmentation';

import { Theme } from './../baseTheme';

export const MuiPickersDay: LabComponents['MuiPickersDay'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        width: '41px',
        height: '32px',
        fontSize: '14px',
        fontWeight: theme.typography.fontWeightMedium,
        borderRadius: theme.shape.small,
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary[900],
        },
        '&.MuiPickersDay-today': {
          border: 'none',
          borderBottom: `2px solid ${theme.palette.primary[900]}`,
          backgroundColor: theme.palette.primary[900],
        },
        '&:not(.Mui-selected)': {
          color: theme.palette.grey[900],
          borderRadius: 0,
          backgroundColor: 'unset',
        },
        '&:hover': {
          borderRadius: theme.shape.small,
          backgroundColor: theme.palette.background.elementHover,
        },
      };
    },
  },
};
