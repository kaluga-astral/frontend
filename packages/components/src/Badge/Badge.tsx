import { BadgeProps } from './types';
import { StyledBadge } from './styled';

export const Badge = ({ children, color, ...props }: BadgeProps) => (
  <StyledBadge customColor={color} {...props} max={99}>
    {children}
  </StyledBadge>
);
