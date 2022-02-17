import {
  ListItemButtonProps,
  ListItemButton as MuiListItemButton,
} from '@mui/material';

export const ListItemButton = ({ children, ...props }: ListItemButtonProps) => {
  return <MuiListItemButton {...props}>{children}</MuiListItemButton>;
};
