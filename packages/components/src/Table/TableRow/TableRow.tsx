import { forwardRef } from 'react';
import {
  TableRow as MuiTableRow,
  type TableRowProps as MuiTableRowProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

export type TableRowProps = WithoutEmotionSpecific<MuiTableRowProps>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props: TableRowProps, ref) => {
    return <MuiTableRow {...props} ref={ref} />;
  },
);
