import { type ChangeEvent, type ReactNode, useCallback, useMemo } from 'react';

import { DataGridCell } from '../DataGridCell';
import type { DataGridColumns, DataGridRowOptions } from '../types';
import { DataGridRow } from '../DataGridRow';

import { checkIsDisabled } from './utils';
import { StyledTableBody } from './styles';

export type DataGridBodyProps<Data extends Record<string, unknown>> = {
  columns: DataGridColumns<Data>[];
  keyId: keyof Data;
  activeRowId?: string;
  onRowClick?: (row: Data) => void;
  selectable?: boolean;
  selectedRows?: Array<Data>;
  rows: (Data & { options?: DataGridRowOptions })[];
  onSelectRow: (row: Data) => (event: ChangeEvent<HTMLInputElement>) => void;
  minDisplayRows: number;
  emptyCellValue?: ReactNode;
  noDataPlaceholder?: ReactNode;
};

export const DataGridBody = <Data extends Record<string, unknown>>({
  rows,
  columns,
  selectable,
  onRowClick,
  onSelectRow,
  selectedRows = [],
  minDisplayRows,
  keyId,
  activeRowId,
  emptyCellValue,
  noDataPlaceholder,
}: DataGridBodyProps<Data>) => {
  const renderCells = useCallback(
    (row: Data, rowId: string, options?: DataGridRowOptions) => {
      const { isDisabled, disabledMatrix } = options || {};

      return columns.map((cell, index) => {
        const cellId = `${rowId}-${index}`;
        const isDisabledCell = checkIsDisabled(
          isDisabled,
          disabledMatrix,
          index,
        );

        return (
          <DataGridCell<Data>
            key={cellId}
            row={row}
            cell={cell}
            emptyCellValue={emptyCellValue}
            isDisabled={isDisabledCell}
          />
        );
      });
    },
    [columns],
  );

  const renderedRows = useMemo(() => {
    return rows.map(({ options, ...row }) => {
      const rowId = (row as Data)[keyId] as string;

      return (
        <DataGridRow
          key={rowId}
          row={row as Data}
          selectable={selectable}
          selectedRows={selectedRows}
          options={options}
          keyId={keyId}
          activeRowId={activeRowId}
          onSelectRow={onSelectRow}
          onRowClick={onRowClick}
        >
          {renderCells(row as Data, rowId, options)}
        </DataGridRow>
      );
    });
  }, [rows, keyId, selectable, selectedRows, onSelectRow, onRowClick, columns]);

  return (
    <StyledTableBody empty={!rows.length} minDisplayRows={minDisplayRows}>
      {rows.length ? renderedRows : noDataPlaceholder}
    </StyledTableBody>
  );
};
