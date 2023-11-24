import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  type ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';
import { forwardRef } from 'react';

import { type WithoutEmotionSpecific } from '../types';

export type ToggleButtonGroupProps =
  WithoutEmotionSpecific<MuiToggleButtonGroupProps>;

export const ToggleButtonGroup = forwardRef<
  HTMLDivElement,
  ToggleButtonGroupProps
>((props, ref) => {
  return <MuiToggleButtonGroup ref={ref} {...props} />;
});
