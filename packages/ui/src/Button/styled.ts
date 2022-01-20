import { Button } from '@mui/material';
import styled from '@emotion/styled';

import { Palette, Theme } from '../theme';

import { ButtonColor, ButtonProps, ButtonState, ButtonVariant } from './types';
import {
  ButtonColors,
  ButtonSizes,
  ButtonStates,
  ButtonVariants,
} from './constants';

interface StyledButtonProps extends Omit<ButtonProps, 'color' | 'variant'> {
  customColor: ButtonColor;
  customVariant: ButtonVariant;
}

type StyledButtonThemeProps = StyledButtonProps & {
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

const getColor = ({
  theme,
  customVariant,
  customColor,
  buttonState,
}: StyledButtonThemeProps & { buttonState: ButtonState }): string => {
  const { LIGHT, CONTAINED, LINK } = ButtonVariants;
  const { PRIMARY, ERROR, SUCCESS, WARNING } = ButtonColors;
  const { palette } = theme;

  if (buttonState === ButtonStates.ACTIVE) {
    if (customVariant === LINK) return palette.grey['900'];

    return palette.primary.contrastText;
  }

  if (customVariant === CONTAINED) return palette.primary.contrastText;

  if (customVariant === LIGHT) {
    if (customColor === PRIMARY) {
      if (buttonState === ButtonStates.DEFAULT) return palette.grey['900'];
      if (buttonState === ButtonStates.HOVER) return palette.grey['900'];
      if (buttonState === ButtonStates.FOCUS) return palette.primary['800'];
    }
    if (customColor === ERROR) return palette.red['900'];
    if (customColor === SUCCESS) return palette.green['900'];
    if (customColor === WARNING) return palette.yellow['900'];

    return palette.grey['900'];
  }

  if (customVariant === LINK) return palette.primary.main;

  return palette.grey['900'];
};

const getBgText = ({
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
  customColor: ButtonColor;
  colorVariant: string;
}): string => {
  const { ERROR, SUCCESS, WARNING, PRIMARY } = ButtonColors;

  if (customColor === ERROR) return palette.red[colorVariant];
  if (customColor === SUCCESS) return palette.green[colorVariant];
  if (customColor === WARNING) return palette.yellow[colorVariant];
  if (customColor === PRIMARY) return palette.primary[colorVariant];

  return 'transparent';
};

const getBgLight = ({
  palette,
  colorVariant,
  buttonState,
  customColor,
}: {
  palette: Palette;
  customColor: ButtonColor;
  buttonState: ButtonState;
  colorVariant: string;
}): string => {
  const { PRIMARY, ERROR, SUCCESS, WARNING } = ButtonColors;
  if (customColor === PRIMARY) {
    if (buttonState === ButtonStates.DEFAULT) return palette.grey[colorVariant];
    if (buttonState === ButtonStates.HOVER) return palette.grey[colorVariant];
    if (buttonState === ButtonStates.FOCUS)
      return palette.primary[colorVariant];
  }
  if (customColor === ERROR) return palette.red[colorVariant];
  if (customColor === SUCCESS) return palette.green[colorVariant];
  if (customColor === WARNING) return palette.yellow[colorVariant];

  return 'transparent';
};

const getBgColor = ({
  customColor,
  customVariant,
  buttonState,
  theme,
}: StyledButtonThemeProps & { buttonState: ButtonState }) => {
  const { LIGHT, CONTAINED, LINK, TEXT } = ButtonVariants;
  const { palette } = theme;

  if (customVariant === LINK) return 'transparent';
  if (buttonState === ButtonStates.ACTIVE) return palette.grey['900'];

  const containedColor = BACKGROUND_COLOR_VARIANTS[buttonState].contained;
  const lightColor = BACKGROUND_COLOR_VARIANTS[buttonState].light;
  const textColor = BACKGROUND_COLOR_VARIANTS[buttonState].text;

  if (customVariant === TEXT)
    return getBgText({ buttonState, palette, colorVariant: textColor });

  if (customVariant === CONTAINED)
    return getBgContained({
      palette,
      customColor,
      colorVariant: containedColor,
    });

  if (customVariant === LIGHT)
    return getBgLight({
      palette,
      buttonState,
      customColor,
      colorVariant: lightColor,
    });

  return 'transparent';
};

const getButtonHeight = ({ size }: StyledButtonThemeProps): string => {
  if (size === ButtonSizes.LARGE) return '40px';

  return '38px';
};

const getButtonPadding = ({ size, theme }: StyledButtonThemeProps): string => {
  if (size === ButtonSizes.LARGE) return theme.spacing(2, 4, 2, 4);

  return theme.spacing(1, 3, 1, 3);
};

const getDisabledBgColor = ({
  theme,
  customVariant,
}: StyledButtonThemeProps): string => {
  if (customVariant === ButtonVariants.LINK) return 'transparent';

  return theme.palette.grey['100'];
};

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<StyledButtonProps>`
  padding: ${getButtonPadding};
  height: ${getButtonHeight};
  text-transform: unset;

  background-color: ${(props) =>
    getBgColor({ ...props, buttonState: ButtonStates.DEFAULT })};
  color: ${(props) =>
    getColor({ ...props, buttonState: ButtonStates.DEFAULT })};

  &.Mui-disabled {
    background-color: ${getDisabledBgColor};
    color: ${({ theme }) => theme.palette.grey['500']};
  }

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
`;
