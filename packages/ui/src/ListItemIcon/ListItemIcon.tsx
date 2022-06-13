import { ListItemIconProps } from '@mui/material';
import { forwardRef } from 'react';

import { StyledListItemIcon } from './styled';

export const ListItemIcon = forwardRef<HTMLLIElement, ListItemIconProps>(
  (props, ref) => {
    return <StyledListItemIcon ref={ref} {...props} />;
  }
);
