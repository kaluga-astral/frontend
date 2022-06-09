import { Typography } from '../../Typography/Typography';
import { SortStates } from '../constants';

import { StyledTableCell, StyledTableSortLabel } from './styled';
import { DataGridHeadColumnProps } from './types';

export function DataGridHeadColumn<T>({
  onSort,
  field,
  sortable,
  align,
  label,
  sorting,
  width,
}: DataGridHeadColumnProps<T>) {
  const sortParams = sorting.find(({ fieldId }) => field === fieldId);
  const hideSortIcon = !Boolean(sortParams);
  const sortDirection = sortParams ? sortParams.sort : SortStates.ASC;

  return (
    <StyledTableCell
      onClick={onSort(field, sortable)}
      align={align}
      width={width}
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
