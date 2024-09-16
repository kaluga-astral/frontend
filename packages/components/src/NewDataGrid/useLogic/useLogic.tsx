import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import { prop, uniqueBy } from '../../utils';
import { type NewDataGridProps } from '../NewDataGrid';
import type { CellValue, DataGridRow } from '../types';

import { getGridTemplateColumns } from './utils';

type UseLogicParams<
  TData extends Record<string, CellValue> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = NewDataGridProps<TData, TSortField>;

export const useLogic = <
  TData extends Record<string, CellValue> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
>({
  keyId,
  columns,
  rows = [],
  selectedRows = [],
  isLoading,
  isDisabled,
  onSelectRow,
}: UseLogicParams<TData, TSortField>) => {
  const isNoData = Boolean(rows?.length);
  const isSelectable = Boolean(onSelectRow);
  const isDataGridDisabled = isLoading || isDisabled;

  const availableRows = rows.filter(
    (row) => !(row.options?.isDisabled || row.options?.isNotSelectable),
  );

  const prevRowsRef = useRef<TData[]>([]);

  useEffect(() => {
    if (!isLoading) {
      prevRowsRef.current = rows;
    }
  }, [rows, isLoading]);

  const gridColumns = getGridTemplateColumns(columns);

  const uncheckedRowsCount = useMemo(() => {
    return availableRows.filter(
      (row) =>
        !selectedRows.find((selectedRow) => selectedRow[keyId] === row[keyId]),
    ).length;
  }, [availableRows, selectedRows, keyId]);

  const processedColumns = useCallback(() => {
    if (rows.length <= 1) {
      return columns.map((column) => ({ ...column, sortable: false }));
    }

    return columns;
  }, [columns, rows]);

  const handleSelectAllRows = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!onSelectRow) {
      return;
    }

    if (event.target.checked) {
      const mergedSelectedRows = uniqueBy(
        [...selectedRows, ...availableRows],
        prop(keyId),
      );

      return onSelectRow(mergedSelectedRows);
    }

    const filteredRows = selectedRows.filter(
      (selectedRow) => !rows.find((row) => row[keyId] === selectedRow[keyId]),
    );

    onSelectRow(filteredRows);
  };

  const handleSelectRow = useCallback(
    (row: TData) =>
      (event: ChangeEvent<HTMLInputElement>): void => {
        if (!onSelectRow) {
          return;
        }

        if (event.target.checked) {
          return onSelectRow([...selectedRows, row]);
        }

        onSelectRow(
          selectedRows.filter(
            (selectedRow) => selectedRow[keyId] !== row[keyId],
          ),
        );
      },
    [selectedRows, onSelectRow, keyId],
  );

  const renderRows = isLoading ? prevRowsRef.current : rows;

  return {
    isDataGridDisabled,
    headProps: {
      rowsCount: availableRows.length,
      uncheckedRowsCount,
      gridColumns,
      isSelectable,
      columns: processedColumns(),
      onSelectAllRows: handleSelectAllRows,
    },
    bodyProps: {
      gridColumns,
      isSelectable,
      onSelectRow: handleSelectRow,
    },
    loaderProps: {
      isLoading: isNoData && isLoading,
      isDisabled,
    },
    renderRows,
  };
};
