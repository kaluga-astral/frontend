import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';
import type { StyledButtonBaseThemeProps } from '../../ButtonBase/styled';
import { ButtonStates } from '../../ButtonBase/constants';
import {
  getBgColor,
  getButtonHeight,
  getButtonPadding,
  getColor,
  getDisabledBgColor,
} from '../../ButtonBase/styled';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root({ ownerState, theme }) {
      const customVariant =
        ownerState.variant as StyledButtonBaseThemeProps['customVariant'];
      const customColor =
        ownerState.color as StyledButtonBaseThemeProps['customColor'];
      const buttonState = ButtonStates.DEFAULT;
      const color = getColor({
        theme,
        customVariant,
        customColor,
        buttonState,
      });
      const backgroundColor = getBgColor({
        customColor,
        customVariant,
        buttonState,
        theme,
      });
      const height = getButtonHeight({
        theme,
        size: ownerState.size as StyledButtonBaseThemeProps['size'],
      });
      const padding = getButtonPadding({
        theme,
        size: ownerState.size as StyledButtonBaseThemeProps['size'],
      });
      const hover = {
        color: getColor({
          theme,
          customVariant,
          customColor,
          buttonState: ButtonStates.HOVER,
        }),
        backgroundColor: getBgColor({
          customColor,
          customVariant,
          theme,
          buttonState: ButtonStates.HOVER,
        }),
      };
      const focus = {
        color: getColor({
          theme,
          customVariant,
          customColor,
          buttonState: ButtonStates.FOCUS,
        }),
        backgroundColor: getBgColor({
          customColor,
          customVariant,
          theme,
          buttonState: ButtonStates.FOCUS,
        }),
        outline: `2px solid ${theme.palette.primary['400']}`,
      };
      const active = {
        color: getColor({
          customColor,
          customVariant,
          theme,
          buttonState: ButtonStates.ACTIVE,
        }),
        backgroundColor: getBgColor({
          customColor,
          customVariant,
          theme,
          buttonState: ButtonStates.ACTIVE,
        }),
        outline: 'none',
      };
      const disabled = {
        color: theme.palette.grey['500'],
        backgroundColor: getDisabledBgColor({
          theme,
          customVariant,
        }),
        cursor: 'unset',
      };

      return {
        display: 'inline-flex',
        color,
        backgroundColor,
        height,
        padding,
        fontWeight: theme.typography.button.fontWeight,
        fontSize: theme.typography.button.fontSize,
        border: 'none',
        borderRadius: theme.shape.small,
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': hover,
        '&:focus': focus,
        '&:active': active,
        '&.Mui-disabled': disabled,
      };
    },
  },
};
