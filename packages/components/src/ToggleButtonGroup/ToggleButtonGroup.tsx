import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';
import { forwardRef } from 'react';

import { WithoutEmotionSpecific } from '../types';

export type ToggleButtonGroupProps =
  WithoutEmotionSpecific<MuiToggleButtonGroupProps>;

export const ToggleButtonGroup = forwardRef<
  HTMLDivElement,
  ToggleButtonGroupProps
>((props, ref) => {
  return <MuiToggleButtonGroup ref={ref} {...props} />;
});
