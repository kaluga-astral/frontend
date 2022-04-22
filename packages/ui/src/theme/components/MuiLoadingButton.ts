import { Components } from '@mui/material';
import { loadingButtonClasses } from '@mui/lab';

import type { Theme } from '../baseTheme';
import type { StyledButtonBaseThemeProps } from '../../ButtonBase/styled';
import { ButtonStates } from '../../ButtonBase/constants';
import { getBgColor } from '../../ButtonBase/styled';

export const MuiLoadingButton: Components<Theme>['MuiLoadingButton'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root({ ownerState, theme }) {
      const customVariant =
        ownerState.variant as StyledButtonBaseThemeProps['customVariant'];
      const customColor =
        ownerState.color as StyledButtonBaseThemeProps['customColor'];

      return {
        [`&.${loadingButtonClasses.loading}`]: {
          backgroundColor: getBgColor({
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.ACTIVE,
          }),
        },
      };
    },
  },
};
