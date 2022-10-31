import { CheckboxProps as MuiCheckboxProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type CheckboxProps = Omit<
  WithoutEmotionSpecific<MuiCheckboxProps>,
  'size' | 'color'
>;
