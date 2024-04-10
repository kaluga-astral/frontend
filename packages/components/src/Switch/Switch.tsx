import { forwardRef } from 'react';
import {
  Switch as MuiSwitch,
  type SwitchProps as MuiSwitchProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type SwitchProps = WithoutEmotionSpecific<MuiSwitchProps>;

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    return <MuiSwitch ref={ref} {...props} />;
  },
);
