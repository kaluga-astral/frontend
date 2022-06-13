import { forwardRef } from 'react';

import { StyledListItemButton } from './styled';
import { ListItemButtonProps } from './types';

export const ListItemButton = forwardRef<HTMLDivElement, ListItemButtonProps>(
  (props, ref) => {
    return <StyledListItemButton ref={ref} {...props} disableRipple />;
  }
);
