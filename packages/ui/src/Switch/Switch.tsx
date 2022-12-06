import { forwardRef } from 'react';
import { Switch as MuiSwitch } from '@mui/material';

import { SwitchProps } from './types';

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    return <MuiSwitch ref={ref} {...props} />;
  },
);
