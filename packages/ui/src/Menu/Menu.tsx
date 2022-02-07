import MuiMenu, { MenuProps } from '@mui/material/Menu';

export const Menu = ({ children, ...props }: MenuProps) => {
  return <MuiMenu {...props}>{children}</MuiMenu>;
};
