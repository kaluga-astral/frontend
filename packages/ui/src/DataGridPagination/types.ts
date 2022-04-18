import { PaginationProps } from '../Pagination';

export type DataGridPaginationProps = Omit<PaginationProps, 'count'> & {
  totalCount: number;
  rowsPerPage?: number;
  page: number;
};
