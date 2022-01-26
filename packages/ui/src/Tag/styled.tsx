import styled from '@emotion/styled';
import { Chip } from '@mui/material';

import { Theme } from '../theme';

import { TagStates, TagVariants } from './constants';
import { TagColor, TagProps, TagState, TagVariant } from './types';

interface StyledTagProps extends Omit<TagProps, 'color'> {
  customColor: TagColor;
  customVariant: TagVariant;
}

type StyledTagThemeProps = StyledTagProps & { theme: Theme };

const getBgColor = ({
  theme,
  tagState,
}: StyledTagThemeProps & { tagState: TagState }): string => {
  if (tagState === TagStates.DEFAULT) {
    return theme.palette.background.default;
  }
  if (tagState === TagStates.HOVER) return 'red';
  if (tagState === TagStates.ACTIVE) return 'red';
  if (tagState === TagStates.SELECTED) return 'red';
  return 'red';
};
const getShape = ({ theme, customVariant }: StyledTagThemeProps): string => {
  if (customVariant === TagVariants.REGULAR) return theme.shape.small;
  if (customVariant === TagVariants.ROUNDED) return '100px';
  return theme.shape.small;
};
const getColor = ({
  theme,
  tagState,
}: StyledTagThemeProps & { tagState: TagState }): string => {
  if (tagState === TagStates.DEFAULT || tagState === TagStates.HOVER)
    return theme.palette.text.primary;
  if (tagState === TagStates.ACTIVE) return theme.palette.primary.main;
  if (tagState === TagStates.SELECTED)
    return theme.palette.primary.contrastText;
  return theme.shape.small;
};

export const StyledTag = styled(Chip)<StyledTagProps>`
  .MuiChip-root {
    background-color: ${(props) =>
      getBgColor({ ...props, tagState: TagStates.DEFAULT })};
    border-radius: ${(props) => getShape({ ...props })};
  }

  .MuiChip-label {
    color: ${(props) => getColor({ ...props, tagState: TagStates.DEFAULT })};
  }
`;
