import { Fab } from '@mui/material';

import { styled } from '../styles';
import { type Theme } from '../theme';

import { type FabColor } from './types';
import { FabColors, FabSizes, FabStates } from './enums';

type StyledFabThemeProps = {
  isSquare: boolean;
  color?: FabColor;
  variant?: 'circular' | 'square';
};

const getBgColor = ({
  theme,
  color,
  fabState,
}: StyledFabThemeProps & { fabState: FabStates; theme: Theme }): string => {
  const getColoredBackgroundColors = () => {
    switch (color) {
      case 'error':
        return theme.palette.error.dark;
      case 'warning':
        return theme.palette.warning.dark;
      case 'success':
        return theme.palette.success.dark;
      default:
        return theme.palette.primary.main;
    }
  };

  const backgroundColors = {
    colored: getColoredBackgroundColors(),
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
}: StyledFabThemeProps & { fabState: FabStates; theme: Theme }): string => {
  const colors = {
    active: theme.palette.grey[100],
    default: theme.palette.grey[900],
    hover: theme.palette.primary[800],
  };

  if (color === FabColors.Default) {
    return colors[fabState];
  }

  return colors.active;
};

const getSize = (
  props: StyledFabThemeProps & { size?: 'small' | 'large' | 'medium' },
) => {
  const sizes = {
    small: '42px',
    medium: '52px',
    large: '62px',
  };

  return sizes[props.size || FabSizes.Large];
};

export const StyledFab = styled(Fab, {
  shouldForwardProp: (props) => props !== 'size' && props !== 'isSquare',
})<StyledFabThemeProps & { isSquare: boolean }>`
  width: ${(props) => getSize(props)};
  height: ${(props) => getSize(props)};

  color: ${(props) => getColor({ ...props, fabState: FabStates.Default })};

  background: ${(props) =>
    getBgColor({ ...props, fabState: FabStates.Default })};
  border-radius: ${({ theme, isSquare }) =>
    isSquare ? theme.shape.small : '50%'};

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
