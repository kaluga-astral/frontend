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

      return {
        display: 'inline-flex',
        color: getColor({
          theme,
          customVariant,
          customColor,
          buttonState: ButtonStates.DEFAULT,
        }),
        backgroundColor: getBgColor({
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
          boxShadow: 'none',
        },
        '&:active': {
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
