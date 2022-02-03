import { Chip } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { TagColors, TagStates, TagVariants } from './constants';
import { TagColor, TagProps, TagState, TagVariant } from './types';

interface StyledTagProps extends Omit<TagProps, 'color'> {
  customColor?: TagColor;
  customVariant?: TagVariant;
  rounded: boolean;
}

type StyledTagThemeProps = StyledTagProps & { theme: Theme };

const getShape = ({
  theme,
  rounded,
}: StyledTagThemeProps & { rounded: boolean }) => {
  if (rounded) return '100px';
  return theme.shape.small;
};
const getBorderRadiusDeleteIcon = ({
  rounded,
}: StyledTagThemeProps & { rounded: boolean }) => {
  if (rounded) return '100px';
  return '0 3px 3px 0';
};

const getBgColor = ({
  theme,
  customColor,
  customVariant,
}: StyledTagThemeProps & { tagState: TagState }): string => {
  if (customColor === TagColors.GREY) {
    return theme.palette.grey[100];
  }
  if (customVariant === TagVariants.CONTAINED) {
    if (customColor === TagColors.PRIMARY) {
      return theme.palette.primary.main;
    }
    if (customColor === TagColors.ERROR) {
      return theme.palette.red[800];
    }
    if (customColor === TagColors.SUCCESS) {
      return theme.palette.green[800];
    }
    if (customColor === TagColors.WARNING) {
      return theme.palette.yellow[800];
    }
  }
  if (customVariant === TagVariants.LIGHT) {
    if (customColor === TagColors.PRIMARY) {
      return theme.palette.primary[100];
    }
    if (customColor === TagColors.ERROR) {
      return theme.palette.red[100];
    }
    if (customColor === TagColors.SUCCESS) {
      return theme.palette.green[100];
    }
    if (customColor === TagColors.WARNING) {
      return theme.palette.yellow[100];
    }
  }

  return theme.palette.background.element;
};

const getColor = ({
  theme,
  customColor,
  customVariant,
}: StyledTagThemeProps & { tagState: TagState }): string => {
  if (customVariant === TagVariants.CONTAINED) {
    if (customColor === TagColors.PRIMARY) {
      return theme.palette.primary.contrastText;
    }
    if (customColor === TagColors.ERROR) {
      return theme.palette.error.contrastText;
    }

    if (customColor === TagColors.WARNING) {
      return theme.palette.warning.contrastText;
    }
    if (customColor === TagColors.SUCCESS) {
      return theme.palette.success.contrastText;
    }
  }
  if (customVariant === TagVariants.LIGHT) {
    if (customColor === TagColors.PRIMARY) {
      return theme.palette.primary.main;
    }
    if (customColor === TagColors.ERROR) {
      return theme.palette.red[800];
    }
    if (customColor === TagColors.WARNING) {
      return theme.palette.yellow[800];
    }
    if (customColor === TagColors.SUCCESS) {
      return theme.palette.green[800];
    }
  }

  return theme.palette.text.primary;
};

const getTagLabelPadding = ({
  theme,
  rounded,
}: StyledTagThemeProps & { rounded: boolean }): string => {
  if (rounded) return theme.spacing(0, 2);

  return theme.spacing(0, 1);
};

const getBgColorDeleteIcon = ({
  theme,
  iconState,
}: StyledTagThemeProps & { iconState: TagState }): string => {
  if (iconState === TagStates.DEFAULT) {
    return 'transparent';
  }
  if (iconState === TagStates.HOVER) {
    return theme.palette.red[100];
  }
  if (iconState === TagStates.ACTIVE) {
    return theme.palette.red[200];
  }
  return 'transparent';
};

export const StyledTag = styled(Chip)<StyledTagProps>`
  user-select: none;
  font-size: 14px;
  height: 20px;
  border-radius: ${(props) => getShape({ ...props })};
  background-color: ${(props) =>
    getBgColor({ ...props, tagState: TagStates.DEFAULT })};
  &:hover {
    background-color: ${(props) =>
      getBgColor({ ...props, tagState: TagStates.HOVER })};
    color: ${(props) => getColor({ ...props, tagState: TagStates.HOVER })};
  }
  &:active {
    background-color: ${(props) =>
      getBgColor({ ...props, tagState: TagStates.ACTIVE })};
    color: ${(props) => getColor({ ...props, tagState: TagStates.ACTIVE })};
  }

  .MuiChip-label {
    padding: ${(props) => getTagLabelPadding({ ...props })};

    color: ${(props) => getColor({ ...props, tagState: TagStates.DEFAULT })};

    &:hover {
      color: ${(props) => getColor({ ...props, tagState: TagStates.HOVER })};
    }
    &:active {
      color: ${(props) => getColor({ ...props, tagState: TagStates.ACTIVE })};
    }
    // need to add SELECTED state
  }
  .MuiChip-deleteIcon {
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: ${(props) => getBorderRadiusDeleteIcon({ ...props })};

    background: ${(props) =>
      getBgColorDeleteIcon({ ...props, iconState: TagStates.DEFAULT })};

    &:hover {
      background: ${(props) =>
        getBgColorDeleteIcon({ ...props, iconState: TagStates.HOVER })};
    }
    &:active {
      background: ${(props) =>
        getBgColorDeleteIcon({ ...props, iconState: TagStates.ACTIVE })};
    }
  }
  .MuiChip-avatar {
    margin: 2px;
    width: 16px;
    height: 16px;
  }
  .MuiChip-icon {
    width: 16px;
    height: 16px;
  }
`;
