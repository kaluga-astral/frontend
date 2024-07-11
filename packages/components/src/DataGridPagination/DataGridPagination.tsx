import { Pagination } from '../Pagination';
import { type PaginationProps } from '../Pagination';
import { MenuItem } from '../MenuItem';
import { Typography } from '../Typography';
import { Select } from '../Select';

import { PaginationWrapper, Range, RangeWrapper } from './styles';
import { useLogic } from './useLogic';
import {
  DEFAULT_ROWS_PER_PAGE,
  DEFAULT_ROWS_PER_PAGE_OPTION,
} from './constants';

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
  rowsPerPage = DEFAULT_ROWS_PER_PAGE,
  totalCount,
  className,
  onSetCountPerPage,
  rowsPerPageOptions = DEFAULT_ROWS_PER_PAGE_OPTION,
  ...props
}: DataGridPaginationProps) => {
  const {
    formattedRange,
    pageCount,
    handleChangeRowsPerPage,
    isVisiblePagination,
  } = useLogic(totalCount, rowsPerPage, page, onSetCountPerPage);

  if (!isVisiblePagination) {
    return null;
  }

  return (
    <PaginationWrapper className={className}>
      <RangeWrapper>
        {onSetCountPerPage && (
          <>
            <Typography variant="body1">Строк на странице:</Typography>
            <Select
              size="small"
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
            >
              {rowsPerPageOptions.map((option) => (
                <MenuItem value={option} key={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </>
        )}
        <Range variant="h6">{formattedRange()}</Range>
      </RangeWrapper>
      <Pagination count={pageCount} page={page} {...props} />
    </PaginationWrapper>
  );
};
