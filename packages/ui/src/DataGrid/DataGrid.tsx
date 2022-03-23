import React, { useState } from 'react';
import { Box, TableCell, TableContainer, TableRow } from '@mui/material';

import { Checkbox } from '../Checkbox';

import {
  DataGridCell,
  DataGridHead,
  TableLoader,
  TablePagination,
} from './components';
import { DataGridProps } from './types';
import { StyledTable, StyledTableBody } from './styled';

export function DataGrid<T>({
  columns,
  data,
  onRowClick,
  onSelect,
  keyId,
  selected,
  loading = false,
  rowsPerPage = 10,
}: DataGridProps<T>) {
  const [page, setPage] = useState(1);

  const rowSelected = !!onSelect && !!selected;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!onSelect || loading) return;

    if (event.target.checked) {
      const newSelecteds = data.map((n) => n[keyId]);

      onSelect(newSelecteds);
      return;
    }

    onSelect([]);
  };

  const handleRowClick = (row: T) => onRowClick && onRowClick(row);

  const handleSelectRow = (name: string) => {
    if (!selected || !onSelect || loading) return;
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    onSelect(newSelected);
  };

  const handleChangePage = (newPage: number): void => setPage(newPage);

  const isSelected = (name: string) => {
    return rowSelected ? selected?.indexOf(name) !== -1 : false;
  };

  const computedPage = page === 0 ? page : page - 1;

  const emptyRows =
    computedPage > 0
      ? Math.max(0, (1 + computedPage) * rowsPerPage - data.length)
      : 0;

  const paginationData = data.slice(
    computedPage * rowsPerPage,
    computedPage * rowsPerPage + rowsPerPage
  );
  const rowHeight = 44;
  const rowsPerPageCount = Math.ceil(data.length / rowsPerPage);
  const emptyRowHeight = rowHeight * emptyRows;
  const tableMaxHeight = rowHeight * rowsPerPage - rowHeight / 2;

  if (!keyId) {
    console.warn('[Table]: required parameter - keyId not passed');
    return null;
  }

  return (
    <Box width="100%">
      <TableContainer sx={{ maxHeight: tableMaxHeight, position: 'relative' }}>
        <StyledTable stickyHeader aria-label="sticky table">
          <DataGridHead
            columns={columns}
            numSelected={selected?.length || 0}
            onSelectAllClick={handleSelectAllClick}
            rowCount={data.length}
            rowSelected={rowSelected}
          />
          <StyledTableBody loading={loading}>
            {paginationData.map((row) => {
              const isItemSelected = isSelected(row[keyId]);

              return (
                <TableRow
                  hover
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row[keyId]}
                  selected={isItemSelected}
                  onClick={() => handleRowClick(row)}
                >
                  {rowSelected && (
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        onChange={() => handleSelectRow(row[keyId])}
                      />
                    </TableCell>
                  )}
                  {columns.map((it, idx) => (
                    <DataGridCell key={idx} row={row} cell={it} />
                  ))}
                </TableRow>
              );
            })}

            {emptyRows > 0 && (
              <TableRow style={{ height: emptyRowHeight }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </StyledTableBody>
        </StyledTable>
      </TableContainer>
      <TablePagination
        count={rowsPerPageCount}
        page={page}
        loading={loading}
        onChangePage={handleChangePage}
      />
      {loading && <TableLoader />}
    </Box>
  );
}
