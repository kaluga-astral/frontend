import type { Components } from '@mui/material';
import { loadingButtonClasses } from '@mui/lab';

import type { Theme } from '../types';
import { type ButtonProps, ButtonStates } from '../../Button';

import { getButtonBackgroundColor } from './MuiButton';

export const MuiLoadingButton: Components<Theme>['MuiLoadingButton'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root({ ownerState, theme }) {
      const variant = ownerState.variant as ButtonProps['variant'];
      const color = ownerState.color as ButtonProps['color'];

      return {
        [`&.${loadingButtonClasses.loading}`]: {
          backgroundColor: getButtonBackgroundColor({
            color,
            variant,
            theme,
            buttonState: ButtonStates.Default,
          }),
        },
      };
    },
  },
};

export default MuiLoadingButton;
