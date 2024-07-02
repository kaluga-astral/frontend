import { type ChangeEvent, type ReactNode, useCallback, useMemo } from 'react';

import { DataGridCell } from '../DataGridCell';
import type { DataGridColumns, DataGridRowOptions } from '../types';
import { DataGridRow } from '../DataGridRow';

import { checkIsDisabled } from './utils';
import { StyledTableBody } from './styles';

export type DataGridBodyProps<TData extends Record<string, unknown>> = {
  columns: DataGridColumns<TData>[];
  keyId: keyof TData;
  activeRowId?: string;
  onRowClick?: (row: TData) => void;
  selectable?: boolean;
  selectedRows?: Array<TData>;
  rows: Array<TData & { options?: DataGridRowOptions }>;
  onSelectRow: (row: TData) => (event: ChangeEvent<HTMLInputElement>) => void;
  minDisplayRows: number;
  emptyCellValue?: ReactNode;
  noDataPlaceholder?: ReactNode;
};

export const DataGridBody = <TData extends Record<string, unknown>>({
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
}: DataGridBodyProps<TData>) => {
  const renderCells = useCallback(
    (row: TData, rowId: string, options?: DataGridRowOptions) => {
      const { isDisabled, isDisabledLastCell = true } = options || {};

      const availableCellsByIndex = !isDisabledLastCell
        ? [columns.length - 1]
        : undefined;

      return columns.map((cell, index) => {
        const cellId = `${rowId}-${index}`;

        const isDisabledCell = checkIsDisabled(
          isDisabled,
          availableCellsByIndex,
          index,
        );

        return (
          <DataGridCell<TData>
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
      const rowId = (row as TData)[keyId] as string;

      return (
        <DataGridRow
          key={rowId}
          row={row as TData}
          selectable={selectable}
          selectedRows={selectedRows}
          options={options}
          keyId={keyId}
          activeRowId={activeRowId}
          onSelectRow={onSelectRow}
          onRowClick={onRowClick}
        >
          {renderCells(row as TData, rowId, options)}
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
