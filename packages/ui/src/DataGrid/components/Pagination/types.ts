export interface TablePaginationProps {
  count: number;
  page: number;
  loading: boolean;
  onChangePage: (page: number) => void;
}
