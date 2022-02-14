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
          // FIXME: to theme
          background: '#EEF1F4',
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
        paddingBlock: theme.spacing(2),
        paddingInline: theme.spacing(1.5),
      };
    },
    notchedOutline({ theme }: { theme: any }) {
      return {
        borderWidth: '2px',
        borderColor: theme.palette.grey[300],
      };
    },
  },
};

export default MuiOutlinedInput;
