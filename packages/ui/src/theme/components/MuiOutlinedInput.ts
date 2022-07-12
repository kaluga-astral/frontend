import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  defaultProps: {
    notched: false,
  },
  styleOverrides: {
    root({ theme }) {
      return {
        fontSize: theme.typography.pxToRem(14),
        borderRadius: theme.shape.small,
        color: theme.palette.grey[900],
        background: theme.palette.background.element,
        '&:hover': {
          background: theme.palette.background.elementHover,
          '&.Mui-disabled': {
            background: theme.palette.background.element,
          },
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.grey[300],
        },
        '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.background.element,
        },
        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.error.dark,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.primary[700],
        },
      };
    },
    input({ theme }) {
      return {
        height: 20,
        padding: theme.spacing(2.5, 2),
        borderRadius: theme.shape.small,
        '&:disabled': {
          background: theme.palette.background.element,
        },
        '&::placeholder': {
          opacity: 1,
          color: theme.palette.grey[600],
        },
      };
    },
    inputSizeSmall({ theme }) {
      return {
        paddingBlock: theme.spacing(1.5),
        paddingInline: theme.spacing(2),
      };
    },
    notchedOutline({ theme }) {
      return {
        borderWidth: 2,
        borderColor: theme.palette.grey[300],
      };
    },
    multiline() {
      return {
        padding: 0,
      };
    },
    inputMultiline({ theme }) {
      return {
        padding: theme.spacing(2),
      };
    },
  },
};

export default MuiOutlinedInput;
