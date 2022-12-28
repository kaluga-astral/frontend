import { RadioProps as MuiRadioProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type RadioProps = Omit<
  WithoutEmotionSpecific<MuiRadioProps>,
  'size' | 'color'
>;
