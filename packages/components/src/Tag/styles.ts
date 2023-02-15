import { Chip } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';
import { BadgeColor } from '../Badge';

import { TagColors, TagStates, TagVariants } from './enums';
import { TagColor, TagSize, TagState, TagVariant } from './types';

import { TagProps } from '.';

type StyledTagProps = Omit<TagProps, 'color' | 'size'> & {
  customColor?: TagColor;
  customVariant?: TagVariant;
  rounded?: boolean;
  customSize: TagSize;
};

type StyledTagThemeProps = StyledTagProps & { theme: Theme };

const HEIGHTS: Record<TagSize, string> = {
  small: '20px',
  medium: '24px',
  large: '32px',
};

export const getBadgeColor = (args: {
  tagColor?: TagColor;
  variant?: TagVariant;
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
  onDelete,
}: StyledTagThemeProps): string => {
  if (customVariant === 'text') {
    return 'transparent';
  }

  if (onDelete) {
    return theme.palette.grey[100];
  }

  if (customColor === TagColors.GREY) {
    return theme.palette.grey[100];
  }

  const backgroundColorVariants = {
    contained: {
      primary: theme.palette.primary.main,
      error: theme.palette.red[800],
      success: theme.palette.green[800],
      warning: theme.palette.yellow[800],
      grey: theme.palette.grey[100],
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

  if (!customVariant) {
    return backgroundColorVariants.contained.primary;
  }

  if (customVariant && customColor) {
    return backgroundColorVariants[customVariant][customColor];
  }

  return theme.palette.background.element;
};

const getColor = ({
  theme,
  customColor,
  customVariant,
  onDelete,
}: StyledTagThemeProps): string => {
  if (onDelete || customVariant === 'text') {
    return theme.palette.grey[900];
  }

  const textColorVariants = {
    contained: {
      primary: theme.palette.primary.contrastText,
      error: theme.palette.error.contrastText,
      success: theme.palette.warning.contrastText,
      warning: theme.palette.success.contrastText,
      default: theme.palette.text.primary,
    },
    light: {
      primary: theme.palette.primary.main,
      error: theme.palette.red[800],
      success: theme.palette.green[800],
      warning: theme.palette.yellow[800],
      default: theme.palette.text.primary,
    },
  };

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
}: StyledTagThemeProps & { iconState: TagState }): string => {
  const bgColorDeleteIcon = {
    default: 'transparent',
    hover: theme.palette.red[100],
    active: theme.palette.red[200],
  };

  if (iconState) {
    return bgColorDeleteIcon[iconState];
  }

  return 'transparent';
};

export const StyledTag = styled(Chip, {
  shouldForwardProp: (prop) =>
    prop !== 'customColor' &&
    prop !== 'customVariant' &&
    prop !== 'rounded' &&
    prop !== 'customSize',
})<StyledTagProps>`
  height: ${({ customSize }) => HEIGHTS[customSize]};

  font-size: 14px;

  background-color: ${getBgColor};
  border-radius: ${getShape};

  user-select: none;

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

    color: ${({ theme }) => theme.palette.grey[800]};

    background: ${(props) =>
      getDeleteIconBgColor({ ...props, iconState: TagStates.DEFAULT })};
    border-radius: ${getDeleteIconBorderRadius};

    &:hover {
      color: ${({ theme }) => theme.palette.grey[800]};

      background: ${(props) =>
        getDeleteIconBgColor({ ...props, iconState: TagStates.HOVER })};
    }

    &:active {
      color: ${({ theme }) => theme.palette.grey[800]};

      background: ${(props) =>
        getDeleteIconBgColor({ ...props, iconState: TagStates.ACTIVE })};
    }
  }

  .MuiChip-avatar {
    width: 16px;
    height: 16px;
    margin: 2px;
  }

  .MuiChip-icon {
    width: 16px;
    height: 16px;
  }
`;
