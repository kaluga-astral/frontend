import { type ChangeEvent, type ReactNode, useCallback, useMemo } from 'react';

import { type DataGridRow } from '../../types';
import { DataGridNoData } from '../../DataGridNoData';
import { prop, uniqBy } from '../../../utils';

export function useDataGridCommonUtils<
  Data extends Record<string, unknown> = DataGridRow,
>({
  rows,
  selectedRows,
  keyId,
  onSelectRow,
  noDataPlaceholder,
  loading,
}: {
  rows?: Data[];
  selectedRows: Data[];
  keyId: keyof Data;
  onSelectRow: ((rows: Data[]) => void) | undefined;
  noDataPlaceholder?: ReactNode;
  loading?: boolean;
}) {
  const handleSelectAllRows = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      if (!onSelectRow || typeof rows === 'undefined') {
        return;
      }

      if (event.target.checked) {
        const mergedSelectedRows = uniqBy(
          [...selectedRows, ...rows],
          prop(keyId),
        );

        return onSelectRow(mergedSelectedRows);
      }

      const filteredRows = selectedRows.filter(
        (selectedRow) => !rows.find((row) => row[keyId] === selectedRow[keyId]),
      );

      onSelectRow(filteredRows);
    },
    [rows, selectedRows, keyId, onSelectRow],
  );

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
    if (typeof rows === 'undefined') {
      return 0;
    }

    return rows.filter(
      (row) =>
        !selectedRows.find((selectedRow) => selectedRow[keyId] === row[keyId]),
    ).length;
  }, [rows, selectedRows, keyId]);

  const renderedPlaceholder = useMemo(() => {
    if (!loading) {
      return noDataPlaceholder || <DataGridNoData />;
    }

    return null;
  }, [noDataPlaceholder, loading]);

  return {
    handleSelectAllRows,
    handleSelectRow,
    uncheckedRowsCount,
    renderedPlaceholder,
  };
}
