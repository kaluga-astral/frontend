import { BadgeProps } from './types';
import { StyledBadge } from './styled';

const Badge = ({ children, color, ...props }: BadgeProps) => {
  return (
    <StyledBadge customColor={color} {...props} max={99}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
