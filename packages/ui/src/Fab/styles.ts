import { Fab } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { FabProps } from './Fab';
import { FabSizes, FabStates } from './enums';

type StyledFabThemeProps = FabProps & { theme: Theme } & { isSquare: boolean };

const getBgColor = ({
  theme,
  color,
  fabState,
}: StyledFabThemeProps & { fabState: FabStates }): string => {
  const backGroundColors = {
    default: theme.palette.grey[100],
    defaultHover: theme.palette.primary[100],
    error: theme.palette.red[800],
    errorHover: theme.palette.red[900],
  };

  if (!color) {
    if (fabState === FabStates.DEFAULT) {
      return backGroundColors.default;
    }

    if (fabState === FabStates.ACTIVE || fabState === FabStates.HOVER) {
      return backGroundColors.defaultHover;
    }
  }

  if (color === 'error') {
    if (fabState === FabStates.ACTIVE || fabState === FabStates.HOVER) {
      return backGroundColors.errorHover;
    }

    return backGroundColors.error;
  }

  return '';
};
const getColor = ({
  theme,
  color,
  fabState,
}: StyledFabThemeProps & { fabState: FabStates }): string => {
  const colors = {
    default: theme.palette.grey[900],
    defaultHover: theme.palette.primary[800],
  };

  if (!color) {
    if (fabState === FabStates.DEFAULT) {
      return colors.default;
    }

    if (fabState === FabStates.ACTIVE || fabState === FabStates.HOVER) {
      return colors.defaultHover;
    }
  }

  return '';
};

const getSize = (props: FabProps) => {
  if (props.size === FabSizes.SMALL) {
    return '42px';
  }

  if (props.size === FabSizes.MEDIUM) {
    return '52px';
  }

  if (props.size === FabSizes.LARGE) {
    return '62px';
  }

  return '62px';
};
const getBorderRadius = (props: StyledFabThemeProps) => {
  if (props.isSquare) {
    return props.theme.shape.small;
  }

  return '';
};

export const StyledFab = styled(Fab, {
  shouldForwardProp: (props) => props !== 'size' && props !== 'isSquare',
})<FabProps & { isSquare: boolean }>`
  width: ${(props) => getSize(props)};
  height: ${(props) => getSize(props)};

  color: ${(props) => getColor({ ...props, fabState: FabStates.DEFAULT })};

  background: ${(props) =>
    getBgColor({ ...props, fabState: FabStates.DEFAULT })};
  border-radius: ${(props) => getBorderRadius(props)};

  :active {
    color: ${(props) => getColor({ ...props, fabState: FabStates.ACTIVE })};

    background: ${(props) =>
      getBgColor({ ...props, fabState: FabStates.ACTIVE })};
  }

  :hover {
    color: ${(props) => getColor({ ...props, fabState: FabStates.ACTIVE })};

    background: ${(props) =>
      getBgColor({ ...props, fabState: FabStates.ACTIVE })};
  }
`;
