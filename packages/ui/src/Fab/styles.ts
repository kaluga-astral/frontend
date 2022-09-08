import { Fab } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { FabProps } from './Fab';
import { FabColors, FabSizes, FabStates } from './enums';

type StyledFabThemeProps = FabProps & { theme: Theme } & { isSquare: boolean };

const getBgColor = ({
  theme,
  color,
  fabState,
}: StyledFabThemeProps & { fabState: FabStates }): string => {
  const backgroundColors = {
    colored: theme.palette[color ? color : 'primary'][800],
    default: theme.palette.grey[100],
    defaultHover: theme.palette.primary[100],
    error: theme.palette.red[800],
    errorHover: theme.palette.red[900],
  };

  if (!color) {
    if (fabState === FabStates.ACTIVE || fabState === FabStates.HOVER) {
      return backgroundColors.defaultHover;
    }

    return backgroundColors[FabStates.DEFAULT];
  }

  if (color === FabColors.ERROR) {
    if (fabState === FabStates.ACTIVE || fabState === FabStates.HOVER) {
      return backgroundColors.errorHover;
    }

    return backgroundColors.error;
  }

  return backgroundColors.colored;
};
const getColor = ({
  theme,
  color,
  fabState,
}: StyledFabThemeProps & { fabState: FabStates }): string => {
  const colors = {
    colored: theme.palette.grey[100],
    default: theme.palette.grey[900],
    defaultHover: theme.palette.primary[800],
  };

  if (!color) {
    if (fabState === FabStates.ACTIVE || fabState === FabStates.HOVER) {
      return colors.defaultHover;
    }

    return colors[FabStates.DEFAULT];
  }

  return colors.colored;
};

const getSize = (props: FabProps) => {
  if (props.size === FabSizes.SMALL) {
    return '42px';
  }

  if (props.size === FabSizes.MEDIUM) {
    return '52px';
  }

  return '62px';
};
const getBorderRadius = (props: StyledFabThemeProps) => {
  if (props.isSquare) {
    return props.theme.shape.small;
  }

  return '50%';
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
