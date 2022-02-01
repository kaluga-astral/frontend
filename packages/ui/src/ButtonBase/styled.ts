import styled from '@emotion/styled';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';

import { Palette, Theme } from '../theme';

import {
  ButtonColors,
  ButtonSizes,
  ButtonStates,
  ButtonVariants,
} from './constants';
import {
  BaseButtonProps,
  ButtonColor,
  ButtonSize,
  ButtonState,
  ButtonVariant,
} from './types';

type StyledButtonBaseProps = Omit<BaseButtonProps, 'color' | 'variant'> & {
  customColor?: ButtonColor;
  customVariant?: ButtonVariant;
};

type StyledButtonBaseThemeProps = {
  customColor?: ButtonColor;
  customVariant?: ButtonVariant;
  size?: ButtonSize;
  theme: Theme;
};

const BACKGROUND_COLOR_VARIANTS = {
  default: {
    contained: '800',
    light: '100',
    text: '100',
  },
  hover: {
    contained: '700',
    light: '200',
    text: '200',
  },
  focus: {
    contained: '900',
    light: '100',
    text: '100',
  },
};

export const getColor = ({
  theme,
  customVariant,
  customColor,
  buttonState,
}: StyledButtonBaseThemeProps & { buttonState: ButtonState }): string => {
  const { palette } = theme;

  if (buttonState === ButtonStates.ACTIVE) {
    if (customVariant === ButtonVariants.LINK) return palette.grey['900'];

    return palette.primary.contrastText;
  }

  if (customVariant === ButtonVariants.TEXT) {
    if (buttonState === ButtonStates.FOCUS) return theme.palette.primary.main;

    return palette.grey['900'];
  }

  if (customVariant === ButtonVariants.CONTAINED)
    return palette.primary.contrastText;

  if (customVariant === ButtonVariants.LIGHT) {
    if (customColor === ButtonColors.PRIMARY) {
      if (buttonState === ButtonStates.DEFAULT) return palette.grey['900'];
      if (buttonState === ButtonStates.HOVER) return palette.grey['900'];
      if (buttonState === ButtonStates.FOCUS) return palette.primary['800'];
    }
    if (customColor === ButtonColors.ERROR) return palette.red['900'];
    if (customColor === ButtonColors.SUCCESS) return palette.green['900'];
    if (customColor === ButtonColors.WARNING) return palette.yellow['900'];

    return palette.grey['900'];
  }

  if (customVariant === ButtonVariants.LINK) {
    if (buttonState === ButtonStates.DEFAULT) return palette.primary['800'];
    if (buttonState === ButtonStates.HOVER) return palette.primary['700'];
    if (buttonState === ButtonStates.FOCUS) return palette.primary.dark;

    return palette.primary.main;
  }

  return palette.grey['900'];
};
export const getBgText = ({
  palette,
  buttonState,
  colorVariant,
}: {
  palette: Palette;
  buttonState: ButtonState;
  colorVariant: string;
}): string => {
  if (buttonState === ButtonStates.HOVER) return palette.grey[colorVariant];
  if (buttonState === ButtonStates.FOCUS) return palette.primary[colorVariant];

  return 'transparent';
};

const getBgContained = ({
  palette,
  colorVariant,
  customColor,
}: {
  palette: Palette;
  customColor?: ButtonColor;
  colorVariant: string;
}): string => {
  if (customColor === ButtonColors.ERROR) return palette.red[colorVariant];
  if (customColor === ButtonColors.SUCCESS) return palette.green[colorVariant];
  if (customColor === ButtonColors.WARNING) return palette.yellow[colorVariant];
  if (customColor === ButtonColors.PRIMARY)
    return palette.primary[colorVariant];

  return 'transparent';
};

const getBgLight = ({
  palette,
  colorVariant,
  buttonState,
  customColor,
}: {
  palette: Palette;
  customColor?: ButtonColor;
  buttonState: ButtonState;
  colorVariant: string;
}): string => {
  if (customColor === ButtonColors.PRIMARY) {
    if (buttonState === ButtonStates.DEFAULT) return palette.grey[colorVariant];
    if (buttonState === ButtonStates.HOVER) return palette.grey[colorVariant];
    if (buttonState === ButtonStates.FOCUS)
      return palette.primary[colorVariant];
  }
  if (customColor === ButtonColors.ERROR) return palette.red[colorVariant];
  if (customColor === ButtonColors.SUCCESS) return palette.green[colorVariant];
  if (customColor === ButtonColors.WARNING) return palette.yellow[colorVariant];

  return 'transparent';
};

export const getBgColor = ({
  customColor,
  customVariant,
  buttonState,
  theme,
}: StyledButtonBaseThemeProps & { buttonState: ButtonState }) => {
  const { palette } = theme;

  if (customVariant === ButtonVariants.LINK) return 'transparent';
  if (buttonState === ButtonStates.ACTIVE) return palette.grey['900'];

  const containedColor = BACKGROUND_COLOR_VARIANTS[buttonState].contained;
  const lightColor = BACKGROUND_COLOR_VARIANTS[buttonState].light;
  const textColor = BACKGROUND_COLOR_VARIANTS[buttonState].text;

  if (customVariant === ButtonVariants.TEXT)
    return getBgText({ buttonState, palette, colorVariant: textColor });

  if (customVariant === ButtonVariants.CONTAINED)
    return getBgContained({
      palette,
      customColor,
      colorVariant: containedColor,
    });

  if (customVariant === ButtonVariants.LIGHT)
    return getBgLight({
      palette,
      buttonState,
      customColor,
      colorVariant: lightColor,
    });

  return 'transparent';
};

export const getButtonHeight = ({
  size,
}: StyledButtonBaseThemeProps): string => {
  if (size === ButtonSizes.LARGE) return '40px';

  return '32px';
};

export const getButtonPadding = ({
  size,
  theme,
}: StyledButtonBaseThemeProps): string => {
  if (size === ButtonSizes.LARGE) return theme.spacing(2, 4, 2, 4);

  return theme.spacing(1, 3, 1, 3);
};

export const getDisabledBgColor = ({
  theme,
  customVariant,
}: StyledButtonBaseThemeProps): string => {
  if (
    customVariant === ButtonVariants.LINK ||
    customVariant === ButtonVariants.TEXT
  )
    return 'transparent';

  return theme.palette.grey['100'];
};

export const StyledButtonBase = styled(ButtonUnstyled, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<StyledButtonBaseProps>`
  border: none;
  font-family: Ubuntu, serif;
  padding: ${getButtonPadding};
  height: ${getButtonHeight};
  border-radius: ${({ theme }) => theme.shape.small};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: ${(props) =>
    getBgColor({ ...props, buttonState: ButtonStates.DEFAULT })};
  color: ${(props) =>
    getColor({ ...props, buttonState: ButtonStates.DEFAULT })};

  &:hover {
    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.HOVER })};
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.HOVER })};
  }

  &:focus {
    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.FOCUS })};
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.FOCUS })};
  }

  &:active {
    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.ACTIVE })};
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.ACTIVE })};
  }

  &.${buttonUnstyledClasses.disabled} {
    cursor: unset;
    background-color: ${getDisabledBgColor};
    color: ${({ theme }) => theme.palette.grey['500']};
  }
`;
