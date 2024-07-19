import { Badge } from '@mui/material';

import { styled } from '../styles';
import { type Theme } from '../theme';

import { type BadgeColor, type BadgeVariantsColor } from './types';

type StyledBadgeProps = {
  $customColor: BadgeColor;
  $withBorder?: boolean;
  $variantColor: BadgeVariantsColor;
};

type StyledBadgeThemeProps = StyledBadgeProps & { theme: Theme };

const getBgColor = ({
  $customColor,
  theme,
  $variantColor,
}: StyledBadgeThemeProps): string => {
  const colors = {
    contained: {
      grey: theme.palette.grey[800],
      primary: theme.palette.primary[800],
      error: theme.palette.red[800],
      success: theme.palette.green[800],
      warning: theme.palette.yellow[800],
      default: theme.palette.primary.main,
    },
    light: {
      grey: theme.palette.grey[300],
      primary: theme.palette.primary[100],
      error: theme.palette.red[100],
      success: theme.palette.green[100],
      warning: theme.palette.yellow[100],
      default: theme.palette.primary.main,
    },
  };

  if ($customColor === 'white') {
    return theme.palette.background.default;
  }

  return colors[$variantColor][$customColor];
};

const getTextColor = ({
  $customColor,
  theme,
  $variantColor,
}: StyledBadgeThemeProps): string => {
  const lightTextColor = {
    grey: theme.palette.grey[900],
    primary: theme.palette.primary[900],
    error: theme.palette.red[900],
    success: theme.palette.green[900],
    warning: theme.palette.yellow[900],
    default: theme.palette.primary.contrastText,
  };

  if ($customColor === 'white') {
    return theme.palette.grey[900];
  }

  if ($variantColor === 'contained') {
    return theme.palette.common.white;
  }

  return lightTextColor[$customColor || 'default'];
};

export const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) =>
    !['$customColor', '$withBorder', '$variantColor'].includes(prop),
})<StyledBadgeProps>`
  .MuiBadge-badge {
    height: 20px;
    padding: ${({ theme }) => theme.spacing(0, 1)};

    font-size: ${({ theme }) => theme.typography.small.fontSize};
    line-height: 20px;
    color: ${({ $customColor, theme, $variantColor }) =>
      getTextColor({
        $customColor: $customColor,
        theme,
        $variantColor: $variantColor,
      })};

    background-color: ${({ $customColor, theme, $variantColor }) =>
      getBgColor({
        $customColor: $customColor,
        theme,
        $variantColor: $variantColor,
      })};
    border: ${({ $withBorder, theme }) =>
      $withBorder ? `2px solid ${theme.palette.common.white}` : 'none'};
    border-radius: ${({ $withBorder }) => ($withBorder ? '12px' : null)};
  }

  .MuiBadge-dot {
    width: 12px;
    height: 12px;

    border: 2px solid ${({ theme }) => theme.palette.common.white};
  }
`;
