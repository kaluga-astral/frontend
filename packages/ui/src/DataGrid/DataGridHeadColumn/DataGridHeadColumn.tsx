import { CSSProperties, useMemo } from 'react';
import { TableCellProps } from '@mui/material';
import { SortDownFillSm, SortFillSm, SortUpFillSm } from '@astral/icons';

import { SortStates } from '../constants';
import { DataGridRow, DataGridSort } from '../types';

import { StyledTableCell, TableCellTitle } from './styles';

export type DataGridHeadColumnProps<
  Data = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  onSort: (field: SortField) => void;
  sorting: DataGridSort<SortField>[];
  label?: string;
  sortable?: boolean;
  align?: TableCellProps['align'];
  field?: keyof Data;
  width?: CSSProperties['width'];
};

export function DataGridHeadColumn<Data, SortField extends keyof Data>({
  onSort,
  field,
  sortable,
  align,
  label,
  sorting,
  width,
}: DataGridHeadColumnProps<Data, SortField>) {
  const sortParams = useMemo(
    () => sorting.find(({ fieldId }) => field === fieldId),
    [sorting, field],
  );

  const sortIcon = useMemo(() => {
    if (!sortable) {
      return null;
    }

    switch (sortParams?.sort) {
      case SortStates.ASC:
        return <SortUpFillSm color="primary" />;
      case SortStates.DESC:
        return <SortDownFillSm color="primary" />;
      default:
        return <SortFillSm />;
    }
  }, [sortParams, sortable]);

  const handleSortClick = () => {
    if (field && sortable) {
      onSort(field as SortField);
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
}
