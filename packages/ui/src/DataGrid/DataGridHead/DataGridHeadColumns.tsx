import { useMemo } from 'react';

import { Typography } from '../../Typography/Typography';
import { SortStates } from '../constants';

import { StyledTableCell, StyledTableSortLabel } from './styled';
import { DataGridHeadColumnsProps } from './types';

export function DataGridHeadColumns<T>({
  columns,
  onSort,
  sorting,
}: DataGridHeadColumnsProps<T>) {
  const renderColumns = useMemo(() => {
    return columns.map(({ field, label, sortable, align, renderCell }) => {
      const sortParams = sorting.find(({ fieldId }) => field === fieldId);
      const hideSortIcon = !Boolean(sortParams);
      const sortDirection = sortParams ? sortParams.sort : SortStates.ASC;
      const fitContent = Boolean(renderCell);

      return (
        <StyledTableCell
          key={field}
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
    });
  }, [columns, onSort, sorting]);

  return <>{renderColumns}</>;
}

export default DataGridHeadColumns;
