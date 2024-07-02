import { type CSSProperties, useMemo } from 'react';
import { type TableCellProps } from '@mui/material';
import { SortDownFillSm, SortFillSm, SortUpFillSm } from '@astral/icons';

import { SortStates } from '../enums';
import { type DataGridRow, type DataGridSort } from '../types';

import { StyledTableCell, TableCellTitle } from './styles';

export type DataGridHeadColumnProps<
  TData = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = {
  onSort: (field: TSortField) => void;
  sorting?: DataGridSort<TSortField>;
  label?: string;
  sortable?: boolean;
  align?: TableCellProps['align'];
  field?: keyof TData;
  width?: CSSProperties['width'];
};

export const DataGridHeadColumn = <TData, TSortField extends keyof TData>({
  onSort,
  field,
  sortable,
  align,
  label,
  sorting,
  width,
}: DataGridHeadColumnProps<TData, TSortField>) => {
  const sortIcon = useMemo(() => {
    if (!sortable) {
      return null;
    }

    if (sorting?.fieldId !== field) {
      return <SortFillSm />;
    }

    switch (sorting?.sort) {
      case SortStates.ASC:
        return <SortUpFillSm color="primary" />;
      case SortStates.DESC:
        return <SortDownFillSm color="primary" />;
      default:
        return <SortFillSm />;
    }
  }, [sorting, sortable, field]);

  const handleSortClick = () => {
    if (field && sortable) {
      onSort(field as TSortField);
    }
  };

  return (
    <StyledTableCell
      onClick={handleSortClick}
      align={align}
      width={width}
      sortable={sortable}
    >
      <TableCellTitle variant="pointer">
        {label}
        {sortIcon}
      </TableCellTitle>
    </StyledTableCell>
  );
};
