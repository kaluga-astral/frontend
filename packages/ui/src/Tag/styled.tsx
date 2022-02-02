import styled from '@emotion/styled';
import { Chip } from '@mui/material';

import { Theme } from '../theme';

import { TagColors, TagStates, TagVariants } from './constants';
import { TagColor, TagProps, TagState, TagVariant } from './types';

interface StyledTagProps extends Omit<TagProps, 'color'> {
  customcolor: TagColor;
  customvariant: TagVariant;
}

type StyledTagThemeProps = StyledTagProps & { theme: Theme };

const getShape = ({
  theme,
  rounded,
}: StyledTagThemeProps & { rounded: boolean }) => {
  if (rounded) return '100px';
  return theme.shape.small;
};

const getBgColor = ({
  theme,
  customcolor,
  customvariant,
}: StyledTagThemeProps & { tagState: TagState }): string => {
  if (customvariant === TagVariants.CONTAINED) {
    if (customcolor === TagColors.PRIMARY) {
      return theme.palette.primary.main;
    }
    if (customcolor === TagColors.ERROR) {
      return theme.palette.red[800];
    }
    if (customcolor === TagColors.SUCCESS) {
      return theme.palette.green[800];
    }
    if (customcolor === TagColors.WARNING) {
      return theme.palette.yellow[800];
    }
  }
  if (customvariant === TagVariants.LIGHT) {
    if (customcolor === TagColors.PRIMARY) {
      return theme.palette.primary[100];
    }
    if (customcolor === TagColors.ERROR) {
      return theme.palette.red[100];
    }
    if (customcolor === TagColors.SUCCESS) {
      return theme.palette.green[100];
    }
    if (customcolor === TagColors.WARNING) {
      return theme.palette.yellow[100];
    }
  }

  return theme.palette.background.element;
};

const getColor = ({
  theme,
  customcolor,
  customvariant,
}: StyledTagThemeProps & { tagState: TagState }): string => {
  if (customvariant === TagVariants.CONTAINED) {
    if (customcolor === TagColors.PRIMARY) {
      return theme.palette.primary.contrastText;
    }
    if (customcolor === TagColors.ERROR) {
      return theme.palette.error.contrastText;
    }

    if (customcolor === TagColors.WARNING) {
      return theme.palette.warning.contrastText;
    }
    if (customcolor === TagColors.SUCCESS) {
      return theme.palette.success.contrastText;
    }
  }
  if (customvariant === TagVariants.LIGHT) {
    if (customcolor === TagColors.PRIMARY) {
      return theme.palette.primary.main;
    }
    if (customcolor === TagColors.ERROR) {
      return theme.palette.red[800];
    }
    if (customcolor === TagColors.WARNING) {
      return theme.palette.yellow[800];
    }
    if (customcolor === TagColors.SUCCESS) {
      return theme.palette.green[800];
    }
  }

  return theme.palette.text.primary;
};

const getTagPadding = ({
  theme,
  rounded,
}: StyledTagThemeProps & { rounded: boolean }): string => {
  console.log(rounded);
  if (rounded) return theme.spacing(0, 2, 0, 2);

  return theme.spacing(0, 4, 0, 4);
};

export const StyledTag = styled(Chip)<StyledTagProps>`
  font-size: 14px;
  padding: ${({ theme, rounded }) => getTagPadding(theme, rounded)};

  line-height: 20px;

  border-radius: ${(props) => {
    return getShape({ ...props });
  }};
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
    color: ${(props) => getColor({ ...props, tagState: TagStates.DEFAULT })};

    &:hover {
      color: ${(props) => getColor({ ...props, tagState: TagStates.HOVER })};
    }
    &:active {
      color: ${(props) => getColor({ ...props, tagState: TagStates.ACTIVE })};
    }
    // need to add SELECTED state
  }
`;
