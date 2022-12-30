import { Components } from '@mui/material';
import { loadingButtonClasses } from '@mui/lab';

import type { Theme } from '../baseTheme';
import type { ButtonBaseWrapperThemeProps } from '../../ButtonBase/styles';
import { ButtonStates } from '../../ButtonBase';
import { getBgColor } from '../../ButtonBase/styles';

export const MuiLoadingButton: Components<Theme>['MuiLoadingButton'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root({ ownerState, theme }) {
      const customVariant =
        ownerState.variant as ButtonBaseWrapperThemeProps['customVariant'];
      const customColor =
        ownerState.color as ButtonBaseWrapperThemeProps['customColor'];

      return {
        [`&.${loadingButtonClasses.loading}`]: {
          backgroundColor: getBgColor({
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.Default,
          }),
        },
      };
    },
  },
};

export default MuiLoadingButton;
