import { ChangeEvent, useCallback, useMemo } from 'react';

import { Table } from '../Table';

import { DataGridHead } from './DataGridHead';
import { DataGridBody } from './DataGridBody';
import DataGridLoader from './DataGridLoader/DataGridLoader';
import { DataGridContainer, StyledTableContainer } from './styled';
import { DataGridProps } from './types';

export function DataGrid<T>({
  columns,
  rows = [],
  selectedRows = [],
  sorting = [],
  maxHeight,
  onSelectRows,
  pagination,
  loading,
  onSort,
  keyId,
}: DataGridProps<T>) {
  const selectable = Boolean(onSelectRows);

  const handleSelectAllRows = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!onSelectRows) return;

    if (event.target.checked) {
      const mergedSelectedRows = [...selectedRows, ...rows];

      return onSelectRows(mergedSelectedRows);
    }

    const filteredRows = selectedRows.filter(
      (selectedRow) => !rows.find((row) => row[keyId] === selectedRow[keyId])
    );

    onSelectRows(filteredRows);
  };

  const handleSelectRow = useCallback(
    (row: T) =>
      (event: ChangeEvent<HTMLInputElement>): void => {
        if (!onSelectRows) return;

        if (event.target.checked) {
          return onSelectRows([...selectedRows, row]);
        }

        return onSelectRows(
          selectedRows.filter(
            (selectedRow) => selectedRow[keyId] !== row[keyId]
          )
        );
      },
    [selectedRows]
  );

  const uncheckedRowsCount = useMemo(() => {
    return rows.filter(
      (row) =>
        !selectedRows.find((selectedRow) => selectedRow[keyId] === row[keyId])
    ).length;
  }, [rows, selectedRows, keyId]);

  return (
    <DataGridContainer>
      <StyledTableContainer maxHeight={maxHeight}>
        <Table stickyHeader>
          <DataGridHead
            onSort={onSort}
            rowsCount={rows.length}
            uncheckedRowsCount={uncheckedRowsCount}
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
            rows={rows}
            columns={columns}
          />
        </Table>
        <DataGridLoader loading={loading} />
      </StyledTableContainer>
      {pagination}
    </DataGridContainer>
  );
}
