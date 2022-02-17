import { DividerProps, Divider as MuiDivider } from '@mui/material';

export const Divider = ({ children, ...props }: DividerProps) => {
  return <MuiDivider {...props}>{children}</MuiDivider>;
};
