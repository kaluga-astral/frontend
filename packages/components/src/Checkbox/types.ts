import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox/Checkbox';

import { WithoutEmotionSpecific } from '../types';

export type CheckboxProps = Omit<
  WithoutEmotionSpecific<MuiCheckboxProps>,
  'size' | 'color'
> & {
  /**
   * Флаг для активации error стилей.
   */
  isError?: boolean;
};
