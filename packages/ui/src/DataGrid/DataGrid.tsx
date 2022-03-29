import React, { useMemo } from 'react';

import { Table, TableContainer } from '../Table';

import { DataGridHead } from './DataGridHead';
import { DataGridBody } from './DataGridBody';
import { DataGridProps } from './types';

export function DataGrid<T>({
  columns,
  data = [],
  // perPage = 10,
  selectedRows = [],
  onSelect,
  sorting = [],
  onSort,
  keyId,
}: DataGridProps<T>) {
  const selectable = Boolean(onSelect);

  const handleSelectAllRows = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (!onSelect) return;

    if (event.target.checked) {
      const newSelectedRows = data.map((row) => row[keyId]);

      return onSelect(newSelectedRows);
    }

    onSelect([]);
  };

  const handleSelectRow = React.useCallback(
    (rowId: string) =>
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (!onSelect) return;

        if (event.target.checked) {
          return onSelect([...selectedRows, rowId]);
        }

        return onSelect(selectedRows.filter((id) => id !== rowId));
      },
    [selectedRows]
  );

  const totalCount = useMemo(() => data.length, [data]);
  const selectedCount = useMemo(() => selectedRows.length, [selectedRows]);

  return (
    <TableContainer>
      <Table>
        <DataGridHead
          onSort={onSort}
          totalCount={totalCount}
          selectedCount={selectedCount}
          onSelectAllRows={handleSelectAllRows}
          selectable={selectable}
          sorting={sorting}
          columns={columns}
        />
        <DataGridBody
          keyId={keyId}
          selectedRows={selectedRows}
          onSelectRow={handleSelectRow}
          selectable={selectable}
          data={data}
          columns={columns}
        />
      </Table>
    </TableContainer>
  );
}
