import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material';
import { forwardRef } from 'react';

import { WithoutEmotionSpecific } from '../types';

export type ToggleButtonProps = WithoutEmotionSpecific<MuiToggleButtonProps>;

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (props, ref) => {
    return <MuiToggleButton ref={ref} {...props} />;
  },
);
