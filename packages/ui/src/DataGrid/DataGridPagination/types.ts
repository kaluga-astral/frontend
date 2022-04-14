import { PaginationProps } from '../../Pagination';

export type DataGridPaginationProps = Omit<PaginationProps, 'count'> & {
  Pagination: (props: PaginationProps) => JSX.Element;
  totalCount: number;
  rowsPerPage?: number;
  page: number;
};
