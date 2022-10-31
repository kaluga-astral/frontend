import {
  TableHead as MuiTableHead,
  TableHeadProps as MuiTableHeadProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../../types';

export type TableHeadProps = WithoutEmotionSpecific<MuiTableHeadProps>;

export const TableHead = (props: TableHeadProps) => <MuiTableHead {...props} />;
