import {
  ListSubheaderProps,
  ListSubheader as MuiListSubheader,
} from '@mui/material';

export const ListSubheader = ({ children, ...props }: ListSubheaderProps) => {
  return <MuiListSubheader {...props}>{children}</MuiListSubheader>;
};
