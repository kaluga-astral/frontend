import { Components, Theme } from '@mui/material';

export const MuiFormLabel: Components<Theme>['MuiFormLabel'] = {
  styleOverrides: {
    root() {
      return {
        position: 'relative',
        transform: 'none',
      };
    },
  },
};

export default MuiFormLabel;
