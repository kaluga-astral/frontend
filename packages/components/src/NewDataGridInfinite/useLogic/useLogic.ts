import { type ChangeEvent, useCallback, useMemo, useRef } from 'react';
import type { ListRange, VirtuosoHandle } from 'react-virtuoso';

import { prop, uniqueBy } from '../../utils';
import { useToggle } from '../../hooks';
import { getGridTemplateColumns } from '../../NewDataGrid/useLogic/utils';
import type { CellValue, DataGridRow } from '../../NewDataGrid';
import { type NewDataGridInfiniteProps } from '../NewDataGridInfinite';

type UseLogicParams<
  TData extends Record<string, CellValue> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = NewDataGridInfiniteProps<TData, TSortField>;

export const useLogic = <
  TData extends Record<string, CellValue> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
>({
  keyId,
  columns,
  rows,
  selectedRows = [],
  isLoading,
  isDisabled,
  isEndReached,
  onEndReached,
  onSelectRow,
}: UseLogicParams<TData, TSortField>) => {
  const virtuoso = useRef<VirtuosoHandle>(null);

  const [isStickyButtonActive, showStickyButton, hideStickyButton] =
    useToggle();

  const isNoData = Boolean(rows?.length);
  const isSelectable = Boolean(onSelectRow);
  const isDataGridDisabled = isDisabled || (!isNoData && isLoading);

  const availableRows = rows.filter(
    (row) => !(row.options?.isDisabled || row.options?.isNotSelectable),
  );

  const gridColumns = getGridTemplateColumns(columns);

  const handleEndReach = useCallback(() => {
    if (!isEndReached && onEndReached) {
      onEndReached();
    }
  }, [isEndReached, onEndReached]);

  const uncheckedRowsCount = useMemo(() => {
    return availableRows.filter(
      (row) =>
        !selectedRows.find((selectedRow) => selectedRow[keyId] === row[keyId]),
    ).length;
  }, [availableRows, selectedRows, keyId]);

  const handleRangeChanged = useCallback(
    (range: ListRange) => {
      if (range.startIndex > 2) {
        showStickyButton();

        return;
      }

      hideStickyButton();
    },
    [hideStickyButton, showStickyButton],
  );

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

  const handleScrollToTop = () => {
    virtuoso.current?.scrollIntoView({ index: 0, behavior: 'smooth' });
  };

  return {
    isNoData,
    isDataGridDisabled,
    isStickyButtonActive,
    virtuosoProps: {
      ref: virtuoso,
      endReached: handleEndReach,
      rangeChanged: handleRangeChanged,
    },
    headProps: {
      rowsCount: availableRows.length,
      uncheckedRowsCount: uncheckedRowsCount,
      gridColumns,
      isSelectable,
      onSelectAllRows: handleSelectAllRows,
    },
    rowProps: {
      isSelectable,
      gridColumns,
      onSelectRow: handleSelectRow,
    },
    scrollToTopButtonProps: {
      onClick: handleScrollToTop,
    },
  };
};
