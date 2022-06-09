import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';
import type { StyledButtonBaseThemeProps } from '../../ButtonBase/styled';
import { ButtonStates } from '../../ButtonBase';
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
      const selected = ownerState.selected as boolean;

      return {
        display: 'inline-flex',
        color: getColor({
          selected,
          theme,
          customVariant,
          customColor,
          buttonState: ButtonStates.DEFAULT,
        }),
        backgroundColor: getBgColor({
          selected,
          customColor,
          customVariant,
          buttonState: ButtonStates.DEFAULT,
          theme,
        }),
        height: getButtonHeight({
          theme,
          size: ownerState.size as StyledButtonBaseThemeProps['size'],
        }),
        padding: getButtonPadding({
          theme,
          size: ownerState.size as StyledButtonBaseThemeProps['size'],
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
            buttonState: ButtonStates.HOVER,
          }),
          backgroundColor: getBgColor({
            selected,
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.HOVER,
          }),
          boxShadow: 'none',
        },
        '&:active': {
          color: getColor({
            selected,
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.ACTIVE,
          }),
          backgroundColor: getBgColor({
            selected,
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.ACTIVE,
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
            buttonState: ButtonStates.FOCUS,
          }),
          backgroundColor: getBgColor({
            selected,
            customColor,
            customVariant,
            theme,
            buttonState: ButtonStates.FOCUS,
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
