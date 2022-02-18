import { ListItemIconProps } from '@mui/material';

import { StyledListItemIcon } from './styled';

export const ListItemIcon = ({ children, ...props }: ListItemIconProps) => {
  return <StyledListItemIcon {...props}>{children}</StyledListItemIcon>;
};
