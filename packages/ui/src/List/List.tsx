import { ListProps, List as MuiList } from '@mui/material';

export const List = ({ children, ...props }: ListProps) => {
  return <MuiList {...props}>{children}</MuiList>;
};
