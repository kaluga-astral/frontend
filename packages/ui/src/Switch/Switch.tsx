import { forwardRef } from 'react';
import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type SwitchProps = WithoutEmotionSpecific<MuiSwitchProps>;

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    return <MuiSwitch ref={ref} {...props} />;
  },
);
