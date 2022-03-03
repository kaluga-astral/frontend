import { ListItemIconProps } from '@mui/material';

import { StyledListItemIcon } from './styled';

export const ListItemIcon = ({ ...props }: ListItemIconProps) => {
  return <StyledListItemIcon {...props} />;
};
