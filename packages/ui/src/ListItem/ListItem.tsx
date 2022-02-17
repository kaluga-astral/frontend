import { ListItemProps, ListItem as MuiListItem } from '@mui/material';

export const ListItem = ({ children, ...props }: ListItemProps) => {
  return <MuiListItem {...props}>{children}</MuiListItem>;
};
