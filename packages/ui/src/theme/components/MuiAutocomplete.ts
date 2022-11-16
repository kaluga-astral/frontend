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
        width: 20,
        height: 20,
      };
    },
    endAdornment() {
      return {
        top: 'calc(50% - 11px)',
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
        padding: 0,
        borderRadius: '50%',
        backgroundColor: theme.palette.grey['500'],
        color: theme.palette.primary.contrastText,
        marginRight: theme.spacing(1),
        width: 14,
        height: 14,
        '>svg': {
          width: 16,
          height: 16,
        },
      };
    },
  },
};
