import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type RadioGroupProps = WithoutEmotionSpecific<MuiRadioGroupProps>;

export const RadioGroup = (props: RadioGroupProps) => (
  <MuiRadioGroup {...props} />
);
