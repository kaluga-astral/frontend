import React, { useMemo } from 'react';

import { Table } from '../Table';

import { DataGridHead } from './DataGridHead';
import { DataGridBody } from './DataGridBody';
import {
  DataGridContainer,
  StyledPagination,
  StyledTableContainer,
} from './styled';
import { DataGridProps } from './types';

export function DataGrid<T>({
  columns,
  rows = [],
  selectedRows = [],
  rowsPerPage = 10,
  sorting = [],
  maxHeight,
  onSelectRow,
  onPageChange,
  totalCount,
  onSort,
  keyId,
  page,
}: DataGridProps<T>) {
  const selectable = Boolean(onSelectRow);

  const handleSelectAllRows = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (!onSelectRow) return;

    const pageRows = rows.map((row) => row[keyId]);

    if (event.target.checked) {
      const mergedSelectedRows = [...selectedRows, ...pageRows];

      return onSelectRow(mergedSelectedRows);
    }

    const filteredRows = selectedRows.filter((id) => !pageRows.includes(id));

    onSelectRow(filteredRows);
  };

  const handleSelectRow = React.useCallback(
    (rowId: string) =>
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (!onSelectRow) return;

        if (event.target.checked) {
          return onSelectRow([...selectedRows, rowId]);
        }

        return onSelectRow(selectedRows.filter((id) => id !== rowId));
      },
    [selectedRows]
  );

  const uncheckedRowsCount = useMemo(() => {
    return rows.filter((row) => !selectedRows.includes(row[keyId])).length;
  }, [rows, selectedRows]);

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
      </StyledTableContainer>
      <StyledPagination
        page={page}
        onChange={onPageChange}
        totalCount={totalCount}
        rowsPerPage={rowsPerPage}
      />
    </DataGridContainer>
  );
}
