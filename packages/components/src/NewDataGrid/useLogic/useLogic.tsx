import { type ChangeEvent, useCallback, useMemo } from 'react';

import { prop, uniqBy } from '../../utils';
import { type NewDataGridProps } from '../NewDataGrid';
import type { DataGridRow } from '../types';

import { getGridTemplateColumns } from './utils';

type UseLogicParams<
  TData extends Record<string, unknown> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = NewDataGridProps<TData, TSortField>;

export const useLogic = <
  TData extends Record<string, unknown> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
>({
  keyId,
  columns,
  rows,
  selectedRows = [],
  isLoading,
  isDisabled,
  onSelectRow,
}: UseLogicParams<TData, TSortField>) => {
  const isNoData = Boolean(rows?.length);
  const isSelectable = Boolean(onSelectRow);
  const isDataGridDisabled = isLoading || isDisabled;

  const availableRows = rows.filter((row) => !row.options?.isDisabled);

  const gridColumns = getGridTemplateColumns(columns, isSelectable);

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
      const mergedSelectedRows = uniqBy(
        [...selectedRows, ...availableRows],
        prop(keyId),
      );

      onSelectRow(mergedSelectedRows);
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
  };
};
