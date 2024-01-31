import React, { forwardRef } from 'react';
import {
  TableBody as MuiTableBody,
  type TableBodyProps as MuiTableBodyProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

export type TableBodyProps = WithoutEmotionSpecific<MuiTableBodyProps>;

export const TableBody = forwardRef(function TableBody(
  props: TableBodyProps,
  ref: React.ForwardedRef<HTMLTableSectionElement>,
) {
  return <MuiTableBody ref={ref} {...props} />;
});
