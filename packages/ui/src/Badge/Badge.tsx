import { BadgeProps } from './types';
import { StyledBadge } from './styled';

const Badge = ({ children, ...props }: BadgeProps) => {
  return (
    <StyledBadge {...props} max={99}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
