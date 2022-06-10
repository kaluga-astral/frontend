import { ChangeEvent, ReactNode, useCallback, useMemo } from 'react';

import { Table } from '../Table';

import { DataGridHead } from './DataGridHead';
import { DataGridBody } from './DataGridBody';
import DataGridLoader from './DataGridLoader/DataGridLoader';
import { DataGridContainer, StyledTableContainer } from './styled';
import { DataGridColumns, DataGridRow, DataGridSort } from './types';

export type DataGridProps<
  Data = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  rows: Data[];
  columns: DataGridColumns<Data>[];
  keyId: keyof DataGridRow;
  onRowClick?: (row: Data) => void;
  selectedRows?: Array<Data>;
  onSelectRow?: (row: Data[]) => void;
  sorting?: DataGridSort<SortField>[];
  onSort: (sorting: DataGridSort<SortField>[]) => void;
  Footer?: ReactNode;
  maxHeight?: number;
  loading?: boolean;
  // используется для отображения переданного кол-ва строк при отсутствии данных
  minDisplayRows?: number;
};

export function DataGrid<Data extends object, SortField extends keyof Data>({
  columns,
  rows = [],
  selectedRows = [],
  sorting = [],
  maxHeight,
  minDisplayRows = 10,
  onRowClick,
  onSelectRow,
  Footer,
  loading,
  onSort,
  keyId,
}: DataGridProps<Data, SortField>) {
  const selectable = Boolean(onSelectRow);

  const handleSelectAllRows = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!onSelectRow) {
      return;
    }

    if (event.target.checked) {
      const mergedSelectedRows = [...selectedRows, ...rows];

      return onSelectRow(mergedSelectedRows);
    }

    const filteredRows = selectedRows.filter(
      (selectedRow) => !rows.find((row) => row[keyId] === selectedRow[keyId]),
    );

    onSelectRow(filteredRows);
  };

  const handleSelectRow = useCallback(
    (row: Data) =>
      (event: ChangeEvent<HTMLInputElement>): void => {
        if (!onSelectRow) {
          return;
        }

        if (event.target.checked) {
          return onSelectRow([...selectedRows, row]);
        }

        return onSelectRow(
          selectedRows.filter(
            (selectedRow) => selectedRow[keyId] !== row[keyId],
          ),
        );
      },
    [selectedRows, onSelectRow, keyId],
  );

  const uncheckedRowsCount = useMemo(() => {
    return rows.filter(
      (row) =>
        !selectedRows.find((selectedRow) => selectedRow[keyId] === row[keyId]),
    ).length;
  }, [rows, selectedRows, keyId]);

  return (
    <DataGridContainer>
      <StyledTableContainer maxHeight={maxHeight}>
        <Table stickyHeader>
          <DataGridHead<Data, SortField>
            onSort={onSort}
            rowsCount={rows.length}
            uncheckedRowsCount={uncheckedRowsCount}
            onSelectAllRows={handleSelectAllRows}
            selectable={selectable}
            sorting={sorting}
            columns={columns}
          />
          <DataGridBody<Data>
            keyId={keyId}
            selectedRows={selectedRows}
            minDisplayRows={minDisplayRows}
            onRowClick={onRowClick}
            onSelectRow={handleSelectRow}
            selectable={selectable}
            rows={rows}
            columns={columns}
          />
        </Table>
        <DataGridLoader loading={loading} />
      </StyledTableContainer>
      {Footer}
    </DataGridContainer>
  );
}
