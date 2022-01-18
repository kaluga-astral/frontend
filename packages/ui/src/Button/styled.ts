import { Button } from '@mui/material';
import styled from '@emotion/styled';

import { Theme } from '../theme';

import { ButtonColor, ButtonProps, ButtonVariant } from './types';
import { ButtonColors, ButtonSizes, ButtonVariants } from './constants';

interface StyledButtonProps extends Omit<ButtonProps, 'color' | 'variant'> {
  customColor?: ButtonColor;
  customVariant?: ButtonVariant;
}

type StyledButtonThemeProps = StyledButtonProps & {
  theme: Theme;
};

type ButtonState = 'default' | 'active' | 'focus' | 'hover';

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
  disabled,
}: StyledButtonThemeProps & { buttonState: ButtonState }): string => {
  const { LIGHT, CONTAINED, LINK } = ButtonVariants;
  const { PRIMARY, ERROR, SUCCESS, WARNING } = ButtonColors;
  const { palette } = theme;

  if (disabled) return `${palette.grey['500']} !important`;

  if (buttonState === 'active') {
    if (customVariant === LINK) return palette.grey['900'];

    return palette.primary.contrastText;
  }

  if (customVariant === CONTAINED) return palette.primary.contrastText;

  if (customVariant === LIGHT) {
    if (customColor === PRIMARY) {
      if (buttonState === 'default') return palette.grey['900'];
      if (buttonState === 'hover') return palette.grey['900'];
      if (buttonState === 'focus') return palette.primary['800'];
    }
    if (customColor === ERROR) return palette.red['900'];
    if (customColor === SUCCESS) return palette.green['900'];
    if (customColor === WARNING) return palette.yellow['900'];

    return palette.grey['900'];
  }

  if (customVariant === LINK) return palette.primary.main;

  return palette.grey['900'];
};

const getBgColor = ({
  customColor,
  customVariant,
  buttonState,
  disabled,
  theme,
}: StyledButtonThemeProps & { buttonState: ButtonState }) => {
  const { LIGHT, CONTAINED, LINK, TEXT } = ButtonVariants;
  const { PRIMARY, ERROR, SUCCESS, WARNING } = ButtonColors;
  const { palette } = theme;

  if (disabled) {
    if (customVariant === LINK || customVariant === TEXT) {
      return 'transparent !important';
    }
    return `${palette.grey['100']} !important`;
  }

  if (customVariant === LINK) return 'transparent';
  if (buttonState === 'active') return palette.grey['900'];

  const containedColor = BACKGROUND_COLOR_VARIANTS[buttonState].contained;
  const lightColor = BACKGROUND_COLOR_VARIANTS[buttonState].light;
  const textColor = BACKGROUND_COLOR_VARIANTS[buttonState].text;

  if (customVariant === TEXT) {
    if (buttonState === 'default') return 'transparent';
    if (buttonState === 'hover') return palette.grey[textColor];
    if (buttonState === 'focus') return palette.primary[textColor];
  }

  if (customVariant === CONTAINED) {
    if (customColor === PRIMARY) return palette.primary[containedColor];
    if (customColor === ERROR) return palette.red[containedColor];
    if (customColor === SUCCESS) return palette.green[containedColor];
    if (customColor === WARNING) return palette.yellow[containedColor];
  }

  if (customVariant === LIGHT) {
    if (customColor === PRIMARY) {
      if (buttonState === 'default') return palette.grey[lightColor];
      if (buttonState === 'hover') return palette.grey[lightColor];
      if (buttonState === 'focus') return palette.primary[lightColor];
    }
    if (customColor === ERROR) return palette.red[lightColor];
    if (customColor === SUCCESS) return palette.green[lightColor];
    if (customColor === WARNING) return palette.yellow[lightColor];
  }

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

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<StyledButtonProps>`
  padding: ${getButtonPadding};
  height: ${getButtonHeight};
  text-transform: unset;
  background-color: ${(props) =>
    getBgColor({ ...props, buttonState: 'default' })};
  color: ${(props) => getColor({ ...props, buttonState: 'default' })};

  &:hover {
    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: 'hover' })};
    color: ${(props) => getColor({ ...props, buttonState: 'hover' })};
  }

  &:focus {
    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: 'focus' })};
    color: ${(props) => getColor({ ...props, buttonState: 'focus' })};
  }

  &:active {
    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: 'active' })};
    color: ${(props) => getColor({ ...props, buttonState: 'active' })};
  }
`;
