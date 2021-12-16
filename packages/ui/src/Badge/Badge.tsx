import { StyledBadge } from './styled';
import { BadgeProps } from './types';

export const Badge = ({ children, color, ...props }: BadgeProps) => {
  return (
    <StyledBadge {...props} max={99}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
