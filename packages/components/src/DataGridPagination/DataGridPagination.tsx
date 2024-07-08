import { Pagination } from '../Pagination';
import { type PaginationProps } from '../Pagination';
import { MenuItem } from '../MenuItem';
import { Typography } from '../Typography';

import { PaginationWrapper, Range, RangeWrapper, StyledSelect } from './styles';
import { useLogic } from './useLogic';
import { ROWS_PER_PAGE, ROWS_PER_PAGE_OPTION } from './constants';

export type DataGridPaginationProps = Omit<PaginationProps, 'count'> & {
  /**
   * Количество всех записей
   */
  totalCount: number;
  /**
   * Максимальное количество записей на страницу
   */
  rowsPerPage?: number;
  /**
   * Текущая страница
   */
  page: number;
  /**
   * Коллбэк для установки количества отображаемых элементов на странице
   */
  onSetCountPerPage?: (rowsPerPage: number) => void;
  /**
   * Конфигурация списка кол-ва элементов, отображаемых на одной странице
   */
  rowsPerPageOptions?: number[];
};

export const DataGridPagination = ({
  page,
  rowsPerPage = ROWS_PER_PAGE,
  totalCount,
  className,
  onSetCountPerPage,
  rowsPerPageOptions = ROWS_PER_PAGE_OPTION,
  ...props
}: DataGridPaginationProps) => {
  const logic = useLogic(totalCount, rowsPerPage, page, onSetCountPerPage);

  if (!logic) {
    return null;
  }

  const { formattedRange, count, handleChangeRowsPerPage } = logic;

  return (
    <PaginationWrapper className={className}>
      <RangeWrapper>
        {onSetCountPerPage && (
          <>
            <Typography variant="body1">Строк на странице:</Typography>
            <StyledSelect
              size="small"
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
            >
              {rowsPerPageOptions.map((option) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </StyledSelect>
          </>
        )}
        <Range variant="h6">{formattedRange()}</Range>
      </RangeWrapper>
      <Pagination count={count} page={page} {...props} />
    </PaginationWrapper>
  );
};
