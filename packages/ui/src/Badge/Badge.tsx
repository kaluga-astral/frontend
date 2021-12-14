import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge';

import { StyledBadge } from './styled';

export const Badge = ({ children, ...props }: MuiBadgeProps) => {
  return (
    <StyledBadge {...props} max={99}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
