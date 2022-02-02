import LoadingButton from '@mui/lab/LoadingButton';

import { styled } from '../styles';
import { Palette, Theme } from '../theme';

import { ButtonColor, ButtonProps, ButtonState, ButtonVariant } from './types';
import {
  ButtonColors,
  ButtonSizes,
  ButtonStates,
  ButtonVariants,
} from './constants';

interface StyledButtonProps extends Omit<ButtonProps, 'color' | 'variant'> {
  customColor?: ButtonColor;
  customVariant?: ButtonVariant;
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
  const { palette } = theme;

  if (buttonState === ButtonStates.ACTIVE) {
    if (customVariant === ButtonVariants.LINK) return palette.grey['900'];

    return palette.primary.contrastText;
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

  if (customVariant === ButtonVariants.LINK) return palette.primary.main;

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

const getBgColor = ({
  customColor,
  customVariant,
  buttonState,
  theme,
}: StyledButtonThemeProps & { buttonState: ButtonState }) => {
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

const getButtonHeight = ({ size }: StyledButtonThemeProps): string => {
  if (size === ButtonSizes.LARGE) return '40px';

  return '32px';
};

const getButtonPadding = ({ size, theme }: StyledButtonThemeProps): string => {
  if (size === ButtonSizes.LARGE) return theme.spacing(2, 4, 2, 4);

  return theme.spacing(1, 3, 1, 3);
};

const getDisabledBgColor = ({
  theme,
  customVariant,
}: StyledButtonThemeProps): string => {
  if (
    customVariant === ButtonVariants.LINK ||
    customVariant === ButtonVariants.TEXT
  )
    return 'transparent';

  return theme.palette.grey['100'];
};

const getLoadingColor = ({
  theme,
  customVariant,
}: StyledButtonThemeProps): string => {
  if (customVariant === ButtonVariants.CONTAINED)
    return theme.palette.primary.contrastText;

  return theme.palette.grey['900'];
};

export const StyledButton = styled(LoadingButton, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' && prop !== 'customVariant',
})<StyledButtonProps>`
  padding: ${getButtonPadding};
  height: ${getButtonHeight};
  text-transform: unset;
  border-radius: ${({ theme }) => theme.shape.small};

  background-color: ${(props) =>
    getBgColor({ ...props, buttonState: ButtonStates.DEFAULT })};
  color: ${(props) =>
    getColor({ ...props, buttonState: ButtonStates.DEFAULT })};

  &.Mui-disabled {
    background-color: ${getDisabledBgColor};
    color: ${({ theme }) => theme.palette.grey['500']};
  }

  &.MuiLoadingButton-loading {
    color: transparent;
    background-color: ${(props) =>
      getBgColor({ ...props, buttonState: ButtonStates.DEFAULT })};

    .MuiLoadingButton-loadingIndicator {
      color: ${getLoadingColor};
    }
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
