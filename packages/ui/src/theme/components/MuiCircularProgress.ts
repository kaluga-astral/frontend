import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

export const MuiCircularProgress: Components<Theme>['MuiCircularProgress'] = {
  styleOverrides: {
    root({ ownerState, theme }) {
      // В данном случае появилась необходимость использования data- атрибута
      // Подробнее: https://github.com/kaluga-astral/frontend/pull/199/files/5b42598b80e5b199e1b1a1298844a51b489e9c5a#r857514116
      const { 'data-color': color } = ownerState;

      return {
        color:
          color === 'primary'
            ? theme.palette.grey[900]
            : theme.palette.primary.contrastText,
      };
    },
  },
};

export default MuiCircularProgress;
