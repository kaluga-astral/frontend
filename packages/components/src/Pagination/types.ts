import { PaginationProps as MuiPaginationProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type PaginationProps = Omit<
  WithoutEmotionSpecific<MuiPaginationProps>,
  'shape'
>;
