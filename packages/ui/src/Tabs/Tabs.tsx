import { forwardRef } from 'react';
import { TabsProps } from '@mui/material';

import { StyledTabs } from './styles';

export const Tabs = forwardRef<HTMLButtonElement, TabsProps>(
  ({ ref, ...props }) => {
    return <StyledTabs {...props} ref={ref} />;
  },
);
