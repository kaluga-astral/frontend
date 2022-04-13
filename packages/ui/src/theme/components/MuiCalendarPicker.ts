import { LabComponents } from '@mui/lab/themeAugmentation';

import { Theme } from './../baseTheme';

export const MuiCalendarPicker: LabComponents['MuiCalendarPicker'] = {
  styleOverrides: {
    viewTransitionContainer({ theme }: { theme: Theme }) {
      return {
        maxHeight: 260,
        overflow: 'hidden',
        '& span': {
          color: theme.palette.grey[600],
          width: 41,
          margin: 0,
        },
      };
    },
  },
};
