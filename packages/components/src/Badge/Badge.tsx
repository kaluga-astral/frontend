import { BadgeProps } from './types';
import { StyledBadge } from './styles';

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
