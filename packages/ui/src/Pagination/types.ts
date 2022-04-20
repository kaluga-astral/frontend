import { PaginationProps as MuiPaginationProps } from '@mui/material';

export type PaginationProps = Omit<MuiPaginationProps, 'shape'>;
