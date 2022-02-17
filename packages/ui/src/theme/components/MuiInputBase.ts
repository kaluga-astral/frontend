import { Components, Theme } from '@mui/material';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        '&.MuiInputBase-colorSuccess + .MuiFormHelperText-root': {
          color: theme.palette.green[800],
        },
      };
    },
  },
};

export default MuiInputBase;
