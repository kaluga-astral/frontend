import MuiMenu from '@mui/material/Menu';

import { MenuProps } from './types';

export const Menu = ({ children, ...props }: MenuProps) => {
  return <MuiMenu {...props}>{children}</MuiMenu>;
};
