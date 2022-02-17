import {
  ListItemIconProps,
  ListItemIcon as MuiListItemIcon,
} from '@mui/material';

export const ListItemIcon = ({ children, ...props }: ListItemIconProps) => {
  return <MuiListItemIcon {...props}>{children}</MuiListItemIcon>;
};
