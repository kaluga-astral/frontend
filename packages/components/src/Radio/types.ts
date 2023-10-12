import { RadioProps as MuiRadioProps } from '@mui/material/Radio/Radio';

import { WithoutEmotionSpecific } from '../types';

export type RadioProps = Omit<
  WithoutEmotionSpecific<MuiRadioProps>,
  'size' | 'color'
> & {
  /**
   * Флаг для применения error стилей.
   */
  isError?: boolean;
};
