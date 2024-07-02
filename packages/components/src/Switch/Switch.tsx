import { forwardRef } from 'react';
import { type SwitchProps as MuiSwitchProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { StyledSwitch } from './styles';

export type SwitchProps = WithoutEmotionSpecific<MuiSwitchProps>;

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (props, ref) => {
    return <StyledSwitch ref={ref} {...props} />;
  },
);
