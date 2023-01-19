import { BadgeProps } from './types';
import { StyledBadge } from './styles';

export const Badge = ({ children, color, max = 99, ...props }: BadgeProps) => (
  <StyledBadge customColor={color} max={max} {...props}>
    {children}
  </StyledBadge>
);
