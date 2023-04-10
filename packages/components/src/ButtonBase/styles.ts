import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { buttonClasses } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { ButtonSizes, ButtonStates, ButtonVariants } from './enums';
import {
  BaseButtonProps,
  ButtonColor,
  ButtonSize,
  ButtonState,
  ButtonVariant,
} from './types';

export type ButtonBaseWrapperProps = Omit<
  BaseButtonProps,
  'color' | 'variant'
> & {
  customColor?: ButtonColor;
  customVariant?: ButtonVariant;
};

export type ButtonBaseWrapperThemeProps = {
  variant?: ButtonVariant;
  customColor?: ButtonColor;
  customVariant?: ButtonVariant;
  selected?: boolean;
  size?: ButtonSize;
  theme: Theme;
};

export const getColor = ({
  theme,
  customVariant,
  customColor,
  buttonState,
  selected,
}: ButtonBaseWrapperThemeProps & { buttonState: ButtonState }): string => {
  const textColorVariants = {
    selected: {
      default: theme.palette.grey['900'],
      hover: theme.palette.grey['700'],
      active: theme.palette.grey['800'],
      focus: theme.palette.grey['900'],
    },
    light: {
      error: {
        default: theme.palette.red['900'],
        hover: theme.palette.red['900'],
        active: theme.palette.red['800'],
        focus: theme.palette.red['900'],
      },
      success: {
        default: theme.palette.green['900'],
        hover: theme.palette.green['900'],
        active: theme.palette.green['800'],
        focus: theme.palette.green['900'],
      },
      primary: {
        default: theme.palette.grey['900'],
        hover: theme.palette.grey['900'],
        active: theme.palette.primary['800'],
        focus: theme.palette.grey['900'],
      },
      warning: {
        default: theme.palette.yellow['900'],
        hover: theme.palette.yellow['900'],
        active: theme.palette.yellow['800'],
        focus: theme.palette.yellow['900'],
      },
    },
    contained: theme.palette.primary.contrastText,
    text: {
      default: theme.palette.grey['900'],
      hover: theme.palette.grey['900'],
      active: theme.palette.primary['800'],
      focus: theme.palette.grey['900'],
    },
    link: {
      default: theme.palette.primary['800'],
      hover: theme.palette.primary['700'],
      active: theme.palette.primary['900'],
      focus: theme.palette.primary['800'],
    },
  };

  if (selected) {
    return customVariant !== ButtonVariants.Link
      ? theme.palette.primary.contrastText
      : textColorVariants.selected[buttonState];
  }

  if (customVariant === ButtonVariants.Contained) {
    return textColorVariants.contained;
  }

  if (customVariant === ButtonVariants.Light && customColor) {
    return textColorVariants.light[customColor][buttonState];
  }

  if (customVariant === ButtonVariants.Text) {
    return textColorVariants.text[buttonState];
  }

  return textColorVariants.link[buttonState];
};

export const getBgColor = ({
  selected,
  customColor,
  customVariant,
  buttonState,
  theme,
}: ButtonBaseWrapperThemeProps & { buttonState: ButtonState }) => {
  const bgColorVariants = {
    selected: {
      default: theme.palette.grey['900'],
      hover: theme.palette.grey['700'],
      active: theme.palette.grey['800'],
      focus: theme.palette.grey['900'],
    },
    light: {
      error: {
        default: theme.palette.red['100'],
        hover: theme.palette.red['200'],
        active: theme.palette.red['100'],
        focus: theme.palette.red['100'],
      },
      success: {
        default: theme.palette.green['100'],
        hover: theme.palette.green['200'],
        active: theme.palette.green['100'],
        focus: theme.palette.green['100'],
      },
      primary: {
        default: theme.palette.grey['100'],
        hover: theme.palette.grey['200'],
        active: theme.palette.primary['100'],
        focus: theme.palette.grey['100'],
      },
      warning: {
        default: theme.palette.yellow['100'],
        hover: theme.palette.yellow['200'],
        active: theme.palette.yellow['100'],
        focus: theme.palette.yellow['100'],
      },
    },
    contained: {
      error: {
        default: theme.palette.red['800'],
        hover: theme.palette.red['700'],
        active: theme.palette.red['900'],
        focus: theme.palette.red['800'],
      },
      success: {
        default: theme.palette.green['800'],
        hover: theme.palette.green['700'],
        active: theme.palette.green['900'],
        focus: theme.palette.green['800'],
      },
      primary: {
        default: theme.palette.primary['800'],
        hover: theme.palette.primary['700'],
        active: theme.palette.primary['900'],
        focus: theme.palette.primary['800'],
      },
      warning: {
        default: theme.palette.yellow['800'],
        hover: theme.palette.yellow['700'],
        active: theme.palette.yellow['900'],
        focus: theme.palette.yellow['800'],
      },
    },
    text: {
      default: 'transparent',
      hover: theme.palette.grey['200'],
      active: theme.palette.primary['100'],
      focus: 'transparent',
    },
    link: 'transparent',
  };

  if (selected && customVariant !== ButtonVariants.Link) {
    return bgColorVariants.selected[buttonState];
  }

  if (customVariant === ButtonVariants.Light && customColor) {
    return bgColorVariants.light[customColor][buttonState];
  }

  if (customVariant === ButtonVariants.Contained && customColor) {
    return bgColorVariants.contained[customColor][buttonState];
  }

  if (customVariant === ButtonVariants.Text) {
    return bgColorVariants.text[buttonState];
  }

  return bgColorVariants.link;
};

export const getButtonHeight = ({
  size,
}: ButtonBaseWrapperThemeProps): string => {
  if (size === ButtonSizes.Large) {
    return '40px';
  }

  return '32px';
};

export const getButtonPadding = ({
  size,
  theme,
}: ButtonBaseWrapperThemeProps): string => {
  if (size === ButtonSizes.Large) {
    return theme.spacing(2, 4, 2, 4);
  }

  return theme.spacing(1, 3, 1, 3);
};

export const getDisabledBgColor = ({
  theme,
  customVariant,
}: ButtonBaseWrapperThemeProps): string => {
  if (
    customVariant === ButtonVariants.Link ||
    customVariant === ButtonVariants.Text
  ) {
    return 'transparent';
  }

  return theme.palette.grey['100'];
};

export const getButtonPaddingMobile = ({
  size,
  theme,
  variant,
}: ButtonBaseWrapperThemeProps): string => {
  if (variant === ButtonVariants.Link) {
    return '0';
  }

  if (size === ButtonSizes.Small) {
    return theme.spacing(2, 3);
  }

  return theme.spacing(4, 3);
};

export const getButtonHeightMobile = ({
  size,
}: ButtonBaseWrapperThemeProps): string => {
  if (size === ButtonSizes.Small) {
    return '36px';
  }

  return '48px';
};

export const ButtonBaseWrapper = styled(ButtonUnstyled, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<ButtonBaseWrapperProps>`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${getButtonHeight};
  padding: ${getButtonPadding};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: ${getButtonHeightMobile};
    padding: ${getButtonPaddingMobile};
  }

  color: ${(props) =>
    getColor({ ...props, buttonState: ButtonStates.Default })};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-family: Ubuntu, serif;

  background-color: ${(props) =>
    getBgColor({ ...props, buttonState: ButtonStates.Default })};

  border: none;
  border-radius: ${({ theme }) => theme.shape.small};
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.Hover })};

    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.Hover })};
  }

  &:focus {
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.Focus })};

    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.Focus })};
  }

  &:active {
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.Active })};

    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.Active })};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    color: ${({ theme }) => theme.palette.grey['500']};

    background-color: ${getDisabledBgColor};
    cursor: unset;

    pointer-events: none;
  }

  &.${buttonClasses.focusVisible} {
    outline: 2px solid ${({ theme }) => theme.palette.primary['400']};
  }
`;
