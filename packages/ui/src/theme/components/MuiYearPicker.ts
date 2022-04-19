import { LabComponents } from '@mui/lab/themeAugmentation';

import { Theme } from './../baseTheme';

export const MuiYearPicker: LabComponents['MuiYearPicker'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        '& .PrivatePickersYear-yearButton': {
          fontSize: theme.typography.link.fontSize,
          borderRadius: theme.shape.small,
        },
      };
    },
  },
};
