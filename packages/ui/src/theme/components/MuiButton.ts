import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';
import type { ButtonBaseWrapperThemeProps } from '../../ButtonBase/styles';
import { ButtonStates } from '../../ButtonBase';
import {
  getBgColor,
  getButtonHeight,
  getButtonPadding,
  getColor,
  getDisabledBgColor,
} from '../../ButtonBase/styles';

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root({ ownerState, theme }) {
      const customVariant =
        ownerState.variant as ButtonBaseWrapperThemeProps['customVariant'];
      const customColor =
        ownerState.color as ButtonBaseWrapperThemeProps['customColor'];
      const selected = ownerState.selected as boolean;

      return {
        display: 'inline-flex',
        gap: theme.spacing(1),
        color: getColor({
          selected,
          theme,
          customVariant,
          customColor,
          buttonState: ButtonStates.Default,
        }),
        backgroundColor: getBgColor({
          selected,
          customColor,
          customVariant,
          buttonState: ButtonStates.Default,
          theme,
        }),
        height: getButtonHeight({
          theme,
          size: ownerState.size as ButtonBaseWrapperThemeProps['size'],
        }),
        padding: getButtonPadding({
          theme,
          size: ownerState.size as ButtonBaseWrapperThemeProps['size'],
        }),
        fontWeight: theme.typography.button.fontWeight,
        fontSize: theme.typography.button.fontSize,
        border: 'none',
        borderRadius: theme.shape.small,
        textTransform: 'none',
        boxShadow: 'none',
        '&:hover': {
          color: getColor({
            selected,
            theme,
            customVariant,
            customColor,
            buttonState: ButtonStates.Hover,
          }),
          backgroundColor: getBgColor({
            selected,
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.Hover,
          }),
          boxShadow: 'none',
        },
        '&:active': {
          color: getColor({
            selected,
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.Active,
          }),
          backgroundColor: getBgColor({
            selected,
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.Active,
          }),
          outline: 'none',
        },
        '&.Mui-disabled': {
          color: theme.palette.grey['500'],
          backgroundColor: getDisabledBgColor({
            theme,
            customVariant,
          }),
        },
        '&.Mui-focusVisible': {
          color: getColor({
            selected,
            theme,
            customVariant,
            customColor,
            buttonState: ButtonStates.Focus,
          }),
          backgroundColor: getBgColor({
            selected,
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.Focus,
          }),
          outline: `2px solid ${theme.palette.primary['400']}`,
          boxShadow: 'none',
        },
        '&.MuiButton-root .MuiButton-startIcon': {
          marginRight: theme.spacing(1),
        },
        '&.MuiButton-root .MuiButton-endIcon': {
          marginLeft: theme.spacing(1),
        },
        '&.MuiButton-root .MuiSvgIcon-root': {
          fontSize: '24px',
        },
      };
    },
  },
};
