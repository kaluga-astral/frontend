import { useMemo } from 'react';
import { Typography } from '../../Typography/Typography';
import { SortStates } from '../constants';

import { StyledTableCell, StyledTableSortLabel } from './styled';
import { DataGridHeadColumnProps } from './types';

export function DataGridHeadColumn<Data, SortField extends keyof Data>({
  onSort,
  field,
  sortable,
  align,
  label,
  sorting,
  width,
}: DataGridHeadColumnProps<Data, SortField>) {
  const sortParams = useMemo(() => sorting.find(({ fieldId }) => field === fieldId), [sorting, field]);
  const hideSortIcon = useMemo(() => !Boolean(sortParams),[sortParams]);
  const sortDirection =  useMemo(() => sortParams ? sortParams.sort : SortStates.ASC, [sortParams]);

  const handleSortClick = () => {
    if (field) {
      onSort(field as SortField, sortable);
    }
  };

  return (
    <StyledTableCell onClick={handleSortClick} align={align} width={width}>
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
