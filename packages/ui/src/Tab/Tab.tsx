import { forwardRef } from 'react';
import { TabProps } from '@mui/material';

import { StyledTab } from './styles';

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ ref, ...props }) => {
    return <StyledTab {...props} ref={ref} />;
  },
);
