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
    colored:
      theme.palette[
        color && color !== FabColors.Default ? color : FabColors.Primary
      ][800],
    default: theme.palette.grey[100],
    defaultHover: theme.palette.primary[100],
    error: theme.palette.red[800],
    errorHover: theme.palette.red[900],
  };

  if (color === FabColors.Default) {
    if (fabState === FabStates.Active || fabState === FabStates.Hover) {
      return backgroundColors.defaultHover;
    }

    return backgroundColors[FabStates.Default];
  }

  if (color === FabColors.Error) {
    if (fabState === FabStates.Active || fabState === FabStates.Hover) {
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
    hover: theme.palette.primary[800],
  };

  if (color === FabColors.Default) {
    return colors[fabState];
  }

  return colors.colored;
};

const getSize = (props: FabProps) => {
  const sizes = {
    small: '42px',
    medium: '52px',
    large: '62px',
  };

  return sizes[props.size || FabSizes.Large];
};
const getBorderRadius = (props: StyledFabThemeProps) => {
  const variants = {
    square: props.theme.shape.small,
    circular: '50%',
  };

  if (props.isSquare) {
    return variants.square;
  }

  return variants[props.variant || 'square'];
};

export const StyledFab = styled(Fab, {
  shouldForwardProp: (props) => props !== 'size' && props !== 'isSquare',
})<FabProps & { isSquare: boolean }>`
  width: ${(props) => getSize(props)};
  height: ${(props) => getSize(props)};

  color: ${(props) => getColor({ ...props, fabState: FabStates.Default })};

  background: ${(props) =>
    getBgColor({ ...props, fabState: FabStates.Default })};
  border-radius: ${(props) => getBorderRadius(props)};

  :active {
    color: ${(props) => getColor({ ...props, fabState: FabStates.Active })};

    background: ${(props) =>
      getBgColor({ ...props, fabState: FabStates.Active })};
  }

  :hover {
    color: ${(props) => getColor({ ...props, fabState: FabStates.Hover })};

    background: ${(props) =>
      getBgColor({ ...props, fabState: FabStates.Hover })};
  }
`;
