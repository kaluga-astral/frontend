import { Typography } from '../../Typography/Typography';

import { StyledTableCell, StyledTableSortLabel } from './styled';
import { DataGridHeadColumnProps } from './types';

export const DataGridHeadColumn = ({
  onSort,
  field,
  sortable,
  align,
  label,
  fitContent,
  sortDirection,
  hideSortIcon,
}: DataGridHeadColumnProps) => {
  return (
    <StyledTableCell
      onClick={onSort(field, sortable)}
      fitContent={fitContent}
      align={align}
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
};
