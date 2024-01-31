import React, { useCallback, useRef } from 'react';
import {
  type ListRange,
  TableVirtuoso,
  type VirtuosoHandle,
} from 'react-virtuoso';
import { ChevronUpOutlineMd } from '@astral/icons';

import { Table, TableBody, TableCell, TableRow } from '../Table';
import { type DataGridProps, type DataGridRow } from '../DataGrid';
import { DataGridHead } from '../DataGrid/DataGridHead';
import { CircularProgress } from '../CircularProgress';
import { Checkbox } from '../Checkbox';
import { DataGridCell } from '../DataGrid/DataGridCell';
import { useToggle } from '../hooks';
import { useDataGridCommonUtils } from '../DataGrid/hooks';
import { Typography } from '../Typography';
import DataGridLoader from '../DataGrid/DataGridLoader/DataGridLoader';

import {
  DataGridInfiniteContainer,
  DataGridInfiniteLoaderWrapper,
  DataGridInfiniteTableContainer,
} from './styles';
import { DataGridInfiniteScrollButton } from './DataGridInfiniteScrollButton';
import {
  DEFAULT_ROW_HEIGHT,
  END_OF_SCROLL_MESSAGE,
  OVERSCAN_COUNT,
} from './constants';

type DataGridInfiniteProps<
  Data extends Record<string, unknown>,
  SortField extends keyof Data,
> = Omit<DataGridProps<Data, SortField>, 'Footer' | 'minDisplayRows'> & {
  /**
   * @example <DataGrid onEndReached={() => console.log('endReached')} />
   * Обработчик подгрузки данных
   */
  onEndReached?: () => void;
  /**
   * @description флаг достижения конца списка
   */
  isEndReached?: boolean;
};

export function DataGridInfinite<
  Data extends Record<string, unknown> = DataGridRow,
  SortField extends keyof Data = keyof Data,
>({
  columns,
  rows = [],
  selectedRows = [],
  sorting,
  maxHeight,
  onRowClick,
  onSelectRow,
  noDataPlaceholder,
  loading,
  disabled,
  onSort,
  keyId,
  activeRowId,
  emptyCellValue,
  className,
  onEndReached,
  isEndReached,
}: DataGridInfiniteProps<Data, SortField>) {
  const {
    handleSelectAllRows,
    handleSelectRow,
    uncheckedRowsCount,
    renderedPlaceholder,
  } = useDataGridCommonUtils<Data>({
    rows,
    selectedRows,
    keyId,
    onSelectRow,
    noDataPlaceholder,
    loading,
  });

  const virtuoso = useRef<VirtuosoHandle>(null);
  const dataLength = rows?.length || 0;
  const selectable = Boolean(onSelectRow);
  const isTableDisabled = loading || disabled;

  const renderCells = useCallback(
    (row: Data, rowId: string) => {
      return columns.map((cell, index) => {
        const cellId = `${rowId}-${index}`;

        return (
          <DataGridCell<Data>
            key={cellId}
            row={row}
            cell={cell}
            emptyCellValue={emptyCellValue}
          />
        );
      });
    },
    [columns, emptyCellValue],
  );

  const [isStickyButtonActive, showStickyButton, hideStickyButton] =
    useToggle();

  const handleRangeChanged = useCallback(
    (range: ListRange) => {
      if (range.startIndex > 2) {
        showStickyButton();
      } else {
        hideStickyButton();
      }
    },
    [hideStickyButton, showStickyButton],
  );

  return (
    <DataGridInfiniteContainer maxHeight={maxHeight} className={className}>
      <DataGridInfiniteTableContainer inert={isTableDisabled ? '' : undefined}>
        <TableVirtuoso
          className="virtuosoScroller"
          style={{ height: '100%', width: '100%' }}
          ref={virtuoso}
          data-testid="virtuoso-scroller"
          overscan={OVERSCAN_COUNT}
          defaultItemHeight={DEFAULT_ROW_HEIGHT}
          endReached={isEndReached ? undefined : onEndReached}
          rangeChanged={handleRangeChanged}
          data={rows}
          components={{
            Table: Table,
            TableBody: React.forwardRef(({ children, ...props }, ref) => (
              <TableBody role={'tableBody'} ref={ref} {...props}>
                {rows.length ? children : renderedPlaceholder}
              </TableBody>
            )),
            TableRow: (props) => {
              const row = props.item;
              const rowId = row[keyId] as string;
              const checked =
                selectable &&
                Boolean(
                  selectedRows.find(
                    (selectedRow) => selectedRow[keyId] === rowId,
                  ),
                );
              const handleRowClick = (itemRow: Data) => () => {
                if (onRowClick) {
                  onRowClick(itemRow);
                }
              };

              return (
                <TableRow
                  key={keyId}
                  hover={Boolean(onRowClick)}
                  selected={activeRowId === rowId}
                  onClick={handleRowClick(row)}
                  {...props}
                >
                  {selectable && (
                    <TableCell
                      padding="checkbox"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Checkbox
                        checked={checked}
                        onChange={handleSelectRow(row)}
                      />
                    </TableCell>
                  )}
                  {renderCells(row, rowId)}
                </TableRow>
              );
            },
          }}
          fixedHeaderContent={() => (
            <DataGridHead<Data, SortField>
              isInfinite
              onSort={onSort}
              rowsCount={rows.length}
              uncheckedRowsCount={uncheckedRowsCount}
              onSelectAllRows={handleSelectAllRows}
              selectable={selectable}
              sorting={sorting}
              columns={columns}
            />
          )}
          fixedFooterContent={() => (
            <TableRow>
              <DataGridInfiniteLoaderWrapper
                colSpan={selectable ? columns.length + 1 : columns.length}
              >
                {loading && Boolean(dataLength) && (
                  <CircularProgress color="primary" size="medium" />
                )}
                {isEndReached && (
                  <Typography color={'textSecondary'}>
                    {END_OF_SCROLL_MESSAGE}
                  </Typography>
                )}
              </DataGridInfiniteLoaderWrapper>
            </TableRow>
          )}
        />
        {isStickyButtonActive && (
          <DataGridInfiniteScrollButton
            vertical="bottom"
            horizontal="right"
            icon={<ChevronUpOutlineMd />}
            onClick={() =>
              virtuoso.current?.scrollIntoView({ index: 0, behavior: 'smooth' })
            }
          />
        )}
      </DataGridInfiniteTableContainer>
      {loading && !dataLength && (
        <DataGridLoader disabled={disabled} loading={loading} />
      )}
    </DataGridInfiniteContainer>
  );
}
