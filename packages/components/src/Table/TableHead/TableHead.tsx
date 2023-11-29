import {
  TableHead as MuiTableHead,
  type TableHeadProps as MuiTableHeadProps,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../../types';

export type TableHeadProps = WithoutEmotionSpecific<MuiTableHeadProps>;

export const TableHead = (props: TableHeadProps) => <MuiTableHead {...props} />;
