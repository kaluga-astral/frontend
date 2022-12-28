import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

const prepareColorToUrl = (color: string) => color.replace('#', '%23');

const getCheckBackgroundImage = (color: string) => {
  const preparedColor = prepareColorToUrl(color);

  return `url('data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2 6L4.5 8.5L10 3.5" stroke="${preparedColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>')`;
};

const getCrossBackgroundImage = (color: string) => {
  const preparedColor = prepareColorToUrl(color);

  return `url('data:image/svg+xml;utf8,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.00005 5.41087L3.79463 3.20545C3.71605 3.12955 3.6108 3.08755 3.50155 3.0885C3.3923 3.08945 3.28779 3.13327 3.21054 3.21053C3.13329 3.28778 3.08947 3.39228 3.08852 3.50153C3.08757 3.61078 3.12957 3.71603 3.20546 3.79462L5.41088 6.00003L3.20546 8.20545C3.12957 8.28403 3.08757 8.38929 3.08852 8.49853C3.08947 8.60778 3.13329 8.71229 3.21054 8.78954C3.28779 8.86679 3.3923 8.91062 3.50155 8.91156C3.6108 8.91251 3.71605 8.87052 3.79463 8.79462L6.00005 6.5892L8.20546 8.79462C8.28405 8.87052 8.3893 8.91251 8.49855 8.91156C8.6078 8.91062 8.7123 8.86679 8.78956 8.78954C8.86681 8.71229 8.91063 8.60778 8.91158 8.49853C8.91253 8.38929 8.87053 8.28403 8.79463 8.20545L6.58921 6.00003L8.79463 3.79462C8.83443 3.75618 8.86617 3.7102 8.88801 3.65937C8.90984 3.60853 8.92134 3.55386 8.92182 3.49853C8.9223 3.44321 8.91176 3.38834 8.89081 3.33714C8.86986 3.28593 8.83892 3.23941 8.7998 3.20029C8.76067 3.16116 8.71415 3.13023 8.66294 3.10927C8.61174 3.08832 8.55687 3.07778 8.50155 3.07826C8.44622 3.07874 8.39155 3.09024 8.34071 3.11207C8.28988 3.13391 8.2439 3.16565 8.20546 3.20545L6.00005 5.41087Z" fill="${preparedColor}" stroke="${preparedColor}" stroke-width="1.5" /></svg>')`;
};

export const MuiSwitch: Components<Theme>['MuiSwitch'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        width: 'fit-content',
        height: 'fit-content',
        padding: theme.spacing(1),

        // CHECKED
        '& .Mui-checked.MuiSwitch-switchBase': {
          padding: 0,
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.primary.main[800],
            opacity: 1,
          },
        },

        // NOT CHECKED
        '& :not(.Mui-checked).MuiSwitch-switchBase': {
          padding: 0,
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.grey[700],
            opacity: 1,
          },
        },

        // CHECKED HOVER
        '& .Mui-checked:hover + .MuiSwitch-track': {
          backgroundColor: theme.palette.primary[700],
        },

        // NOT CHECKED HOVER
        '& :not(.Mui-checked):hover + .MuiSwitch-track': {
          backgroundColor: theme.palette.grey[500],
        },

        // DISABLED TRACK
        '& .MuiButtonBase-root.MuiSwitch-switchBase.Mui-disabled': {
          '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.grey[200],

            '&::before': {
              backgroundImage: getCheckBackgroundImage(theme.palette.grey[500]),
            },
            '&::after': {
              backgroundImage: getCrossBackgroundImage(theme.palette.grey[500]),
            },
          },
        },

        // ACTIVE TRACK
        '& :not(.Mui-disabled):active + .MuiSwitch-track': {
          border: `2px solid ${theme.palette.primary[400]}`,
        },
      };
    },

    switchBase: {
      padding: 0,

      '&:hover, &.Mui-checked:hover': {
        backgroundColor: 'transparent',
      },
    },

    track({ theme }) {
      return {
        borderRadius: 10,
        boxSizing: 'border-box',

        '&::before, &::after': {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          content: '""',
          backgroundSize: 'cover',
        },
        '&::before': {
          left: theme.spacing(2),
          backgroundImage: getCheckBackgroundImage(
            theme.palette.background.default,
          ),
        },
        '&::after': {
          right: theme.spacing(2),
          backgroundImage: getCrossBackgroundImage(
            theme.palette.background.default,
          ),
        },
      };
    },

    thumb({ theme }) {
      return {
        backgroundColor: theme.palette.background.default,
        boxShadow: 'none',
        margin: theme.spacing(1.5),
      };
    },

    sizeSmall: {
      '& .MuiSwitch-track': {
        width: 32,
        height: 16,

        '&::before, &::after': {
          width: 8,
          height: 8,
        },
      },

      '& .MuiSwitch-thumb': {
        width: 12,
        height: 12,
      },
    },

    sizeMedium: {
      '& .MuiSwitch-track': {
        width: 40,
        height: 20,

        '&::before, &::after': {
          width: 12,
          height: 12,
        },
      },

      '& .MuiSwitch-thumb': {
        width: 16,
        height: 16,
      },
    },
  },
};
