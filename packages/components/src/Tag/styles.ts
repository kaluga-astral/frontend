import { Chip, type ChipProps } from '@mui/material';
import { badgeClasses } from '@mui/base';

import { styled } from '../styles';
import { type Theme } from '../theme';
import { type BadgeColor } from '../Badge';

import { TagColors, TagStates, TagVariants } from './enums';
import {
  type TagColor,
  type TagSize,
  type TagState,
  type TagVariant,
} from './types';

type StyledTagProps = {
  customColor?: TagColor;
  customVariant?: TagVariant;
  rounded?: boolean;
  customSize: TagSize;
};

type StyledTagThemeProps = StyledTagProps & { theme: Theme } & Pick<
    ChipProps,
    'onDelete' | 'disabled'
  >;

const HEIGHTS: Record<TagSize, string> = {
  small: '20px',
  medium: '24px',
  large: '32px',
};

export const getBadgeColor = (args: {
  tagColor?: TagColor;
  variant?: TagVariant;
  theme: Theme;
}) => {
  const { tagColor, variant } = args;

  if (variant === TagVariants.CONTAINED) {
    return 'white';
  }

  const colors: Record<TagColor, BadgeColor> = {
    [TagColors.PRIMARY]: 'primary',
    [TagColors.ERROR]: 'error',
    [TagColors.GREY]: 'grey',
    [TagColors.SUCCESS]: 'success',
    [TagColors.WARNING]: 'warning',
    [TagColors.DEFAULT]: 'grey',
  };

  return colors[tagColor || 'default'];
};

const getShape = ({ theme, rounded }: StyledTagThemeProps): string => {
  if (rounded) {
    return '100px';
  }

  return theme.shape.small;
};

const getDeleteIconBorderRadius = ({
  theme,
  rounded,
}: StyledTagThemeProps): string => {
  if (rounded) {
    return '100px';
  }

  return `0  ${theme.shape.small}  ${theme.shape.small} 0`;
};

const getBgColor = ({
  theme,
  customColor,
  customVariant,
  disabled,
}: StyledTagThemeProps): string => {
  if (disabled) {
    return theme.palette.grey[100];
  }

  if (customVariant === 'text') {
    return 'transparent';
  }

  const backgroundColorVariants = {
    contained: {
      primary: theme.palette.primary.main,
      error: theme.palette.red[800],
      success: theme.palette.green[800],
      warning: theme.palette.yellow[800],
      grey: theme.palette.grey[300],
      default: theme.palette.background.element,
    },
    light: {
      primary: theme.palette.primary[100],
      error: theme.palette.red[100],
      success: theme.palette.green[100],
      warning: theme.palette.yellow[100],
      grey: theme.palette.grey[100],
      default: theme.palette.background.element,
    },
  };

  if (customVariant && customColor) {
    return backgroundColorVariants[customVariant][customColor];
  }

  if (!customVariant && customColor) {
    return backgroundColorVariants.contained[customColor];
  }

  return theme.palette.grey[300];
};

const getColor = ({
  theme,
  customColor,
  customVariant,
  disabled,
}: StyledTagThemeProps): string => {
  if (disabled) {
    return theme.palette.text.disabled;
  }

  if (customVariant === 'text') {
    return theme.palette.grey[900];
  }

  const textColorVariants = {
    contained: {
      primary: theme.palette.primary.contrastText,
      error: theme.palette.error.contrastText,
      success: theme.palette.warning.contrastText,
      warning: theme.palette.success.contrastText,
      default: theme.palette.text.primary,
      grey: theme.palette.grey[900],
    },
    light: {
      primary: theme.palette.primary.main,
      error: theme.palette.red[800],
      success: theme.palette.green[800],
      warning: theme.palette.yellow[800],
      default: theme.palette.text.primary,
      grey: theme.palette.grey[900],
    },
  };

  if (!customVariant && !customColor) {
    return theme.palette.grey[900];
  }

  if (!customVariant && customColor !== 'grey') {
    return theme.palette.common.white;
  }

  if (!customColor) {
    return textColorVariants.contained.default;
  }

  if (customVariant && customColor) {
    return textColorVariants[customVariant][customColor];
  }

  return theme.palette.text.primary;
};

const getTagLabelPadding = ({
  theme,
  rounded,
  customSize,
}: StyledTagThemeProps): string => {
  if (rounded) {
    return theme.spacing(0, 2);
  }

  switch (customSize) {
    case 'small':
      return theme.spacing(0, 1);
    case 'medium':
    case 'large':
      return theme.spacing(0, 2);
  }
};

const getDeleteIconBgColor = ({
  theme,
  iconState,
  customVariant,
  customColor,
}: StyledTagThemeProps & { iconState: TagState }): string => {
  const hoverColors = {
    contained: {
      primary: theme.palette.primary[600],
      error: theme.palette.red[600],
      success: theme.palette.green[600],
      warning: theme.palette.yellow[600],
      grey: theme.palette.grey[100],
      default: theme.palette.grey[300],
    },
    light: {
      primary: theme.palette.primary[300],
      error: theme.palette.red[300],
      success: theme.palette.green[300],
      warning: theme.palette.yellow[300],
      grey: theme.palette.grey[300],
      default: theme.palette.grey[300],
    },
  };

  if (iconState !== 'default') {
    if (
      (customVariant === 'contained' || customVariant == 'light') &&
      customColor
    ) {
      return hoverColors[customVariant][customColor || 'default'];
    }

    if (customVariant === 'text') {
      return hoverColors.light.grey;
    }
  }

  return 'transparent';
};

export const getDeleteIconColor = ({
  customVariant,
  customColor,
  theme,
}: StyledTagThemeProps) => {
  if (
    customVariant === 'contained' &&
    customColor !== 'grey' &&
    customColor !== 'default'
  ) {
    return theme.palette.common.white;
  }

  return theme.palette.grey[900];
};

export const StyledTag = styled(Chip, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' &&
    prop !== 'customVariant' &&
    prop !== 'rounded' &&
    prop !== 'customSize',
})<StyledTagProps>`
  user-select: none;

  height: ${({ customSize }) => HEIGHTS[customSize]};

  font-size: 14px;

  background-color: ${getBgColor};
  border-radius: ${getShape};

  &:hover {
    color: ${getColor};

    background-color: ${getBgColor};
  }

  &:active {
    color: ${getColor};

    background-color: ${getBgColor};
  }

  .MuiChip-label {
    padding: ${getTagLabelPadding};

    color: ${getColor};

    &:hover {
      color: ${getColor};
    }

    &:active {
      color: ${getColor};
    }
  }

  .MuiChip-deleteIcon {
    width: 20px;
    height: 20px;
    margin: 0;

    color: ${getDeleteIconColor};

    background: ${(props) =>
      getDeleteIconBgColor({ ...props, iconState: TagStates.DEFAULT })};
    border-radius: ${getDeleteIconBorderRadius};

    &:hover {
      color: ${getDeleteIconColor};

      background: ${(props) =>
        getDeleteIconBgColor({ ...props, iconState: TagStates.HOVER })};
    }

    &:active {
      color: ${getDeleteIconColor};

      background: ${(props) =>
        getDeleteIconBgColor({ ...props, iconState: TagStates.ACTIVE })};
    }
  }

  &.Mui-disabled {
    opacity: 1;
  }

  .MuiChip-avatar {
    width: 16px;
    height: 16px;
    margin: 2px;

    color: ${getColor};
  }

  .MuiChip-icon {
    width: 16px;
    height: 16px;
  }

  & .${badgeClasses.badge} {
    ${({ theme, customColor, customVariant }) =>
      (customColor === 'grey' || customColor === 'default') &&
      customVariant === 'light' &&
      `
      background-color: ${theme.palette.grey[800]};
      color: ${theme.palette.common.white};
    `};

    ${({ theme, customColor, customVariant }) =>
      (customColor === 'grey' || customColor === 'default') &&
      customVariant === 'contained' &&
      `
      color: ${theme.palette.grey[800]};
    `};
  }
`;
