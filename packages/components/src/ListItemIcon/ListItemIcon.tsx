import type { ListItemIconProps as MuiListItemIconProps } from '@mui/material';
import { forwardRef } from 'react';

import type { WithoutEmotionSpecific } from '../types';

import { StyledListItemIcon } from './styled';

type ListItemIconProps = WithoutEmotionSpecific<MuiListItemIconProps>;

export const ListItemIcon = forwardRef<HTMLLIElement, ListItemIconProps>(
  (props, ref) => {
    return <StyledListItemIcon ref={ref} {...props} />;
  },
);
