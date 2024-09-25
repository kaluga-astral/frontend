import { type PaginationProps as MuiPaginationProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type PaginationProps = Omit<
  WithoutEmotionSpecific<MuiPaginationProps>,
  | 'shape'
  | 'showLastButton'
  | 'showFirstButton'
  | 'boundaryCount'
  | 'hidePrevButton'
  | 'hideNextButton'
>;
