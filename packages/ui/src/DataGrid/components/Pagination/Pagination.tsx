import { PaginationStyled } from './styled';
import { TablePaginationProps } from './types';

export function TablePagination({
  count,
  page,
  onChangePage,
  loading,
}: TablePaginationProps) {
  const handleChangePage = (_event: unknown, newPage: number) => {
    onChangePage(newPage);
  };

  return (
    <PaginationStyled
      count={count}
      shape="rounded"
      page={page}
      disabled={loading}
      onChange={handleChangePage}
    />
  );
}
