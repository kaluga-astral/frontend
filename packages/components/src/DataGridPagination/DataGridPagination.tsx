import { Pagination, type PaginationProps } from '../Pagination';
import { MenuItem } from '../MenuItem';
import { Typography } from '../Typography';
import { Select } from '../Select';

import {
  DEFAULT_ROWS_PER_PAGE,
  DEFAULT_ROWS_PER_PAGE_OPTION,
} from './constants';
import { useLogic } from './useLogic';
import { PaginationWrapper, Range, RangeWrapper } from './styles';

export type DataGridPaginationProps = Omit<PaginationProps, 'count'> & {
  /**
   * Количество всех записей
   */
  totalCount: number;

  /**
   * Текущая страница
   */
  page: number;

  /**
   * Максимальное количество записей на страницу
   */
  rowsPerPage?: number;

  /**
   * Конфигурация списка кол-ва элементов, отображаемых на одной странице
   */
  rowsPerPageOptions?: number[];

  /**
   * Коллбэк для установки количества отображаемых элементов на странице
   */
  onSetCountPerPage?: (rowsPerPage: number) => void;
};

export const DataGridPagination = (props: DataGridPaginationProps) => {
  const {
    formattedRange,
    pageCount,
    handleChangeRowsPerPage,
    isVisiblePagination,
  } = useLogic(props);

  const {
    page,
    totalCount,
    className,
    rowsPerPage = DEFAULT_ROWS_PER_PAGE,
    rowsPerPageOptions = DEFAULT_ROWS_PER_PAGE_OPTION,
    onSetCountPerPage,
    ...restProps
  } = props;

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

      <Pagination count={pageCount} page={page} {...restProps} />
    </PaginationWrapper>
  );
};
