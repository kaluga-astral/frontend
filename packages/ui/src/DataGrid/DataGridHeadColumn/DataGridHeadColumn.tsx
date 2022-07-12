import { CSSProperties, useMemo } from 'react';
import { TableCellProps } from '@mui/material';

import { Typography } from '../../Typography/Typography';
import { SortStates } from '../constants';
import { DataGridRow, DataGridSort } from '../types';

import { StyledTableCell, StyledTableSortLabel } from './styled';

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
  const hideSortIcon = useMemo(() => !Boolean(sortParams), [sortParams]);
  const sortDirection = useMemo(
    () => (sortParams ? sortParams.sort : SortStates.ASC),
    [sortParams],
  );

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
      <Typography variant="pointer">{label}</Typography>
      {sortable && (
        <StyledTableSortLabel
          hideSortIcon={hideSortIcon}
          direction={sortDirection}
          active
        />
      )}
    </StyledTableCell>
  );
}
