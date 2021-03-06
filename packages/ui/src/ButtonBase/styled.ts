import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';

import { styled } from '../styles';
import { Theme } from '../theme';

import { ButtonSizes, ButtonStates, ButtonVariants } from './constants';
import {
  BaseButtonProps,
  ButtonColor,
  ButtonSize,
  ButtonState,
  ButtonVariant,
} from './types';

export type StyledButtonBaseProps = Omit<
  BaseButtonProps,
  'color' | 'variant'
> & {
  customColor?: ButtonColor;
  customVariant?: ButtonVariant;
};

export type StyledButtonBaseThemeProps = {
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
}: StyledButtonBaseThemeProps & { buttonState: ButtonState }): string => {
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
    return customVariant !== ButtonVariants.LINK
      ? theme.palette.primary.contrastText
      : textColorVariants.selected[buttonState];
  }

  if (customVariant === ButtonVariants.CONTAINED) {
    return textColorVariants.contained;
  }

  if (customVariant === ButtonVariants.LIGHT && customColor) {
    return textColorVariants.light[customColor][buttonState];
  }

  if (customVariant === ButtonVariants.TEXT) {
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
}: StyledButtonBaseThemeProps & { buttonState: ButtonState }) => {
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

  if (selected && customVariant !== ButtonVariants.LINK) {
    return bgColorVariants.selected[buttonState];
  }

  if (customVariant === ButtonVariants.LIGHT && customColor) {
    return bgColorVariants.light[customColor][buttonState];
  }

  if (customVariant === ButtonVariants.CONTAINED && customColor) {
    return bgColorVariants.contained[customColor][buttonState];
  }

  if (customVariant === ButtonVariants.TEXT) {
    return bgColorVariants.text[buttonState];
  }

  return bgColorVariants.link;
};

export const getButtonHeight = ({
  size,
}: StyledButtonBaseThemeProps): string => {
  if (size === ButtonSizes.LARGE) {
    return '40px';
  }

  return '32px';
};

export const getButtonPadding = ({
  size,
  theme,
}: StyledButtonBaseThemeProps): string => {
  if (size === ButtonSizes.LARGE) {
    return theme.spacing(2, 4, 2, 4);
  }

  return theme.spacing(1, 3, 1, 3);
};

export const getDisabledBgColor = ({
  theme,
  customVariant,
}: StyledButtonBaseThemeProps): string => {
  if (
    customVariant === ButtonVariants.LINK ||
    customVariant === ButtonVariants.TEXT
  ) {
    return 'transparent';
  }

  return theme.palette.grey['100'];
};

export const StyledButtonBase = styled(ButtonUnstyled, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<StyledButtonBaseProps>`
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${getButtonHeight};
  padding: ${getButtonPadding};

  color: ${(props) =>
    getColor({ ...props, buttonState: ButtonStates.DEFAULT })};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-family: Ubuntu, serif;

  background-color: ${(props) =>
    getBgColor({ ...props, buttonState: ButtonStates.DEFAULT })};
  border: none;
  border-radius: ${({ theme }) => theme.shape.small};
  cursor: pointer;

  &:hover {
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.HOVER })};

    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.HOVER })};
  }

  &:focus {
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.FOCUS })};

    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.FOCUS })};
  }

  &:active {
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.ACTIVE })};

    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.ACTIVE })};
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    color: ${({ theme }) => theme.palette.grey['500']};

    background-color: ${getDisabledBgColor};
    cursor: unset;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2px solid ${({ theme }) => theme.palette.primary['400']};
  }
`;
