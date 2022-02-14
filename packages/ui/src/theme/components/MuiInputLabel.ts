import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
  defaultProps: {
    shrink: true,
  },
  styleOverrides: {
    root({ theme }: { theme: any }) {
      return {
        position: 'relative',
        transform: 'none',
        color: theme.palette.grey[700],
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.pxToRem(12),
        lineHeight: theme.typography.pxToRem(16),
        marginBottom: theme.spacing(1),
        '&.Mui-focused': {
          color: theme.palette.grey[700],
        },
        '&.Mui-error': {
          color: theme.palette.grey[700],
        },
        '&.Mui-disabled': {
          color: theme.palette.grey[600],
        },
      };
    },
  },
};

export default MuiInputLabel;
