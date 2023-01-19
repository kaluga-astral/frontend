import { Badge } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { BadgeColor, BadgeProps } from './types';

type StyledBadgeProps = Omit<BadgeProps, 'color'> & {
  customColor: BadgeColor;
};

type StyledBadgeThemeProps = StyledBadgeProps & { theme: Theme };

const getBgColor = ({ customColor, theme }: StyledBadgeThemeProps): string => {
  if (customColor === 'grey') {
    return theme.palette.grey[300];
  }

  if (customColor === 'errorLight') {
    return theme.palette.error.light;
  }

  if (customColor === 'success') {
    return theme.palette.success.light;
  }

  if (customColor === 'primary') {
    return theme.palette.primary.main;
  }

  if (customColor === 'white') {
    return theme.palette.background.default;
  }

  if (customColor === 'error') {
    return theme.palette.error.dark;
  }

  return theme.palette.primary.main;
};

const getTextColor = ({
  customColor,
  theme,
}: StyledBadgeThemeProps): string => {
  if (customColor === 'grey') {
    return theme.palette.text.primary;
  }

  if (customColor === 'primary') {
    return theme.palette.primary.contrastText;
  }

  if (customColor === 'white') {
    return theme.palette.primary.main;
  }

  if (customColor === 'error') {
    return theme.palette.error.contrastText;
  }

  if (customColor === 'errorLight') {
    return theme.palette.error.dark;
  }

  if (customColor === 'success') {
    return theme.palette.success.dark;
  }

  return theme.palette.primary.contrastText;
};

export const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'customColor',
})<StyledBadgeProps>`
  .MuiBadge-badge {
    height: 20px;
    padding: ${({ theme }) => theme.spacing(0, 1)};

    color: ${({ customColor, theme }) => getTextColor({ customColor, theme })};
    font-size: ${({ theme }) => theme.typography.small.fontSize};
    line-height: 20px;

    background-color: ${({ customColor, theme }) =>
      getBgColor({ customColor, theme })};
    border: 2px solid ${({ theme }) => theme.palette.common.white};
    border-radius: 12px;
  }

  .MuiBadge-dot {
    width: 12px;
    height: 12px;

    border: 2px solid ${({ theme }) => theme.palette.common.white};
  }
`;
