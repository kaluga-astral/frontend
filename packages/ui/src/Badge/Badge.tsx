import { BadgeProps as MuiBadgeProps } from '@mui/material/Badge/Badge';

import { StyledBadge } from './styled';

type BadgeColor =
  | 'primary'
  | 'grey'
  | 'white'
  | 'errorLight'
  | 'error'
  | 'success';

export interface BadgeProps extends MuiBadgeProps {
  color: BadgeColor;
}

export const Badge = ({ children, ...props }: BadgeProps) => {
  return (
    <StyledBadge {...props} max={99}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
