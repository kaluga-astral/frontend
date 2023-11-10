import type { TableHeadProps as MuiTableHeadProps } from '@mui/material';
import { TableHead as MuiTableHead } from '@mui/material';

import type { WithoutEmotionSpecific } from '../../types';

export type TableHeadProps = WithoutEmotionSpecific<MuiTableHeadProps>;

export const TableHead = (props: TableHeadProps) => <MuiTableHead {...props} />;
