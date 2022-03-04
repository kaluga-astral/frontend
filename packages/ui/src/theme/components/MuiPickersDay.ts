import { LabComponents } from '@mui/lab/themeAugmentation';

import { Theme } from './../baseTheme';

export const MuiPickersDay: LabComponents['MuiPickersDay'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        width: '41px',
        height: '32px',
        fontSize: theme.typography.link.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        borderRadius: theme.shape.small,
        '&.Mui-selected': {
          backgroundColor: theme.palette.primary[900],
          '& > span': {
            borderBottom: `2px solid ${theme.palette.common.white}`,
            margin: theme.spacing(0, 1, 1, 1),
            borderRadius: 0,
          },
          '&:hover': {
            color: theme.palette.primary[900],
            backgroundColor: theme.palette.background.elementHover,
            '& > span': {
              borderBottom: `2px solid ${theme.palette.primary[900]}`,
              margin: theme.spacing(0, 1, 1, 1),
              borderRadius: 0,
            },
          },
        },
        '&.MuiPickersDay-today': {
          border: 'none',
          backgroundColor: theme.palette.primary[900],
          '&:not(.Mui-selected)': {
            color: theme.palette.primary[900],
            borderRadius: 0,
            backgroundColor: 'unset',
            '& > span': {
              borderBottom: `2px solid ${theme.palette.primary[900]}`,
              margin: theme.spacing(0, 1, 1, 1),
              borderRadius: 0,
            },
          },
          '& > span': {
            borderBottom: `2px solid ${theme.palette.common.white}`,
            margin: theme.spacing(0, 1, 1, 1),
            borderRadius: 0,
          },
        },
        '&:not(.Mui-selected)': {
          color: theme.palette.grey[900],
          borderRadius: 0,
          backgroundColor: 'unset',
        },
        '&:hover': {
          backgroundColor: theme.palette.background.elementHover,
          borderRadius: theme.shape.small,
        },
      };
    },
  },
};
