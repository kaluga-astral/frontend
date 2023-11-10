import type { BadgeProps as MuiBadgeProps } from '@mui/material/Badge/Badge';

import type { WithoutEmotionSpecific } from '../types';

import type { BadgeColor } from './types';
import { StyledBadge } from './styles';

export type BadgeProps = Omit<
  WithoutEmotionSpecific<MuiBadgeProps>,
  'color'
> & {
  /**
   * Цвет фона
   */
  color: BadgeColor;
  /**
   * Наличие белой рамки
   */
  withBorder?: boolean;
};

export const Badge = ({
  children,
  color,
  max = 99,
  withBorder = true,
  ...props
}: BadgeProps) => (
  <StyledBadge customColor={color} max={max} withBorder={withBorder} {...props}>
    {children}
  </StyledBadge>
);
