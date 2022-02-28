import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';
import { AutocompleteSizes } from '../../Autocomplete/constants';

export const MuiAutocomplete: Components<Theme>['MuiAutocomplete'] = {
  styleOverrides: {
    root({ theme }: { theme: any }) {
      return {
        padding: theme.spacing(1),
      };
    },
    inputRoot({ theme, ownerState: { size } }) {
      return {
        paddingTop: '0 !important',
        paddingBottom: '0 !important',
        paddingLeft: `${theme.spacing(1)} !important`,
        minHeight: size === AutocompleteSizes.small ? '32px' : '40px',
      };
    },
    clearIndicator: {
      padding: 0,
    },
  },
};
