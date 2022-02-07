import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem';

export const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return <MuiMenuItem {...props}>{children}</MuiMenuItem>;
};
