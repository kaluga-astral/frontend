import { Components, stepLabelClasses } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiStepLabel: Components<Theme>['MuiStepLabel'] = {
  styleOverrides: {
    label({ theme }) {
      const { active, completed, error } = stepLabelClasses;

      return {
        fontSize: theme.typography.small.fontSize,
        lineHeight: theme.typography.small.lineHeight,
        fontWeight: theme.typography.small.fontWeight,
        color: theme.palette.grey[700],
        [`&.${active}, &.${completed}, &.${error}`]: {
          color: theme.palette.grey[900],
          fontSize: theme.typography.small.fontSize,
          lineHeight: theme.typography.small.lineHeight,
          fontWeight: theme.typography.small.fontWeight,
        },
      };
    },
    iconContainer({ theme }) {
      return {
        paddingRight: theme.spacing(2.5),
      };
    },
  },
};
