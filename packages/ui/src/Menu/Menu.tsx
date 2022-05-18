import MuiMenu from '@mui/material/Menu';
import { forwardRef } from 'react';

import { MenuProps } from './types';

export const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  return <MuiMenu {...props} ref={ref} />;
});
