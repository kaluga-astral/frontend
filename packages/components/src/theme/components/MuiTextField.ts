import {
  type Components,
  inputBaseClasses,
  outlinedInputClasses,
} from '@mui/material';

import { type Theme } from '../types';

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  styleOverrides: {
    root({ theme }) {
      return {
        [`& .${inputBaseClasses.adornedStart}`]: {
          paddingLeft: theme.spacing(2),
        },
        [`& .${inputBaseClasses.adornedEnd}`]: {
          paddingRight: theme.spacing(2),
        },
        [`& .${inputBaseClasses.inputAdornedStart}`]: {
          paddingLeft: theme.spacing(1),
        },
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          top: -4.5,
        },
      };
    },
  },
};
