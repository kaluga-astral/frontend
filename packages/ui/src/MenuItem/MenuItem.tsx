import { MenuItemProps, MenuItem as MuiMenuItem } from '@mui/material';

export const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return <MuiMenuItem {...props}>{children}</MuiMenuItem>;
};
