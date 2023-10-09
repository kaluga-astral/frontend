import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';
import { AutocompleteSizes } from '../../Autocomplete/enums';

export const MuiAutocomplete: Components<Theme>['MuiAutocomplete'] = {
  styleOverrides: {
    inputRoot({ theme, ownerState: { size } }) {
      return {
        paddingTop: `${theme.spacing(1)} !important`,
        paddingBottom: `${theme.spacing(1)} !important`,
        paddingLeft: `${theme.spacing(1)} !important`,
        minHeight: size === AutocompleteSizes.small ? '32px' : '40px',
      };
    },
    input({ theme }) {
      return {
        padding: '0 !important',
        paddingLeft: `${theme.spacing(1)} !important`,
      };
    },
    popupIndicator({ theme }) {
      return {
        borderRadius: theme.shape.small,
        display: 'flex',
        alignItems: 'center',
        width: 32,
        height: 32,
      };
    },
    endAdornment() {
      return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        top: 'calc(50% - 16px)',
      };
    },
    paper({ theme }) {
      return {
        marginTop: theme.spacing(2),
      };
    },
    noOptions({ theme }) {
      return {
        color: theme.palette.grey['500'],
      };
    },
    clearIndicator({ theme }) {
      return {
        width: 32,
        height: 32,

        padding: 0,

        color: theme.palette.primary.contrastText,

        '::before': {
          content: '""',

          position: 'absolute',
          top: '50%',
          left: '50%',

          display: 'block',
          width: '50%',
          height: '50%',

          backgroundColor: theme.palette.grey['500'],

          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
        },

        '>svg': {
          width: 16,
          height: 16,

          zIndex: 1,
        },
      };
    },
  },
};
