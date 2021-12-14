import styled from '@emotion/styled';
import { Badge, BadgeProps } from '@mui/material';

import { Theme } from '../theme';

interface BadgeThemeProps extends BadgeProps {
  theme: Theme;
}

const getBgColor = ({ color, theme }: BadgeThemeProps): string => {
  if (color === 'grey') return theme.palette.grey[300];
  if (color === 'errorLight') return theme.palette.error.light;
  if (color === 'success') return theme.palette.success.light;
  if (color === 'primary') return theme.palette.primary.main;
  if (color === 'white') return theme.palette.background.default;
  if (color === 'error') return theme.palette.error.dark;

  return theme.palette.primary.main;
};

const getTextColor = ({ color, theme }: BadgeThemeProps): string => {
  if (color === 'grey') return theme.palette.text.primary;
  if (color === 'primary') return theme.palette.primary.contrastText;
  if (color === 'white') return theme.palette.primary.main;
  if (color === 'error') return theme.palette.error.contrastText;
  if (color === 'errorLight') return theme.palette.error.dark;
  if (color === 'success') return theme.palette.success.dark;

  return theme.palette.primary.contrastText;
};

export const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'color',
})`
  .MuiBadge-badge {
    background-color: ${({ color, theme }) => getBgColor({ color, theme })};
    color: ${({ color, theme }) => getTextColor({ color, theme })}
`;
