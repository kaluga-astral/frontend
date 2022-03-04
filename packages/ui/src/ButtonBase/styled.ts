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

export const getColor = ({
  theme,
  customVariant,
  customColor,
  buttonState,
}: StyledButtonBaseThemeProps & { buttonState: ButtonState }): string => {
  const textColorVariants = {
    light: {
      error: {
        default: theme.palette.red['900'],
        hover: theme.palette.red['900'],
        active: theme.palette.red['900'],
        focus: theme.palette.red['900'],
      },
      success: {
        default: theme.palette.green['900'],
        hover: theme.palette.green['900'],
        active: theme.palette.green['900'],
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
        active: theme.palette.yellow['900'],
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
  customColor,
  customVariant,
  buttonState,
  theme,
}: StyledButtonBaseThemeProps & { buttonState: ButtonState }) => {
  const bgColorVariants = {
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
  position: relative;
  display: inline-flex;
  height: ${getButtonHeight};
  align-items: center;
  justify-content: center;
  padding: ${getButtonPadding};
  border: none;
  background-color: ${(props) =>
    getBgColor({ ...props, buttonState: ButtonStates.DEFAULT })};
  border-radius: ${({ theme }) => theme.shape.small};
  color: ${(props) =>
    getColor({ ...props, buttonState: ButtonStates.DEFAULT })};
  cursor: pointer;
  font-family: Ubuntu, serif;
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};

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
    outline: 2px solid ${({ theme }) => theme.palette.primary['400']};
  }

  &:active {
    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.ACTIVE })};
    color: ${(props) =>
      getColor({ ...props, buttonState: ButtonStates.ACTIVE })};
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    background-color: ${getDisabledBgColor};
    color: ${({ theme }) => theme.palette.grey['500']};
    cursor: unset;
  }
`;
