import { MenuProps, Menu as MuiMenu } from '@mui/material';

export const Menu = ({ children, ...props }: MenuProps) => {
  return <MuiMenu {...props}>{children}</MuiMenu>;
};
