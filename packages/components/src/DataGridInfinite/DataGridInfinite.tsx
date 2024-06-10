import React, { useCallback, useRef, useState } from 'react';
import {
  type ListRange,
  TableVirtuoso,
  type VirtuosoHandle,
} from 'react-virtuoso';

import { TableBody } from '../Table';
import { Container, type DataGridProps, type DataGridRow } from '../DataGrid';
import { DataGridHead } from '../DataGrid/DataGridHead';
import { CircularProgress } from '../CircularProgress';
import { DataGridCell } from '../DataGrid/DataGridCell';
import { useToggle } from '../hooks';
import { useDataGridCommonUtils } from '../DataGrid/hooks';
import { Typography } from '../Typography';
import { DataGridLoader } from '../DataGrid/DataGridLoader';
import { ScrollToTopButton } from '../ScrollToTopButton';

import {
  DataGridInfiniteLoaderWrapper,
  DataGridInfiniteTable,
  DataGridInfiniteTableContainer,
  FooterRow,
} from './styles';
import {
  DEFAULT_ROW_HEIGHT,
  END_OF_SCROLL_MESSAGE,
  OVERSCAN_COUNT,
} from './constants';
import { DataGridInfiniteTableRow } from './DataGridInfiniteTableRow';

export type DataGridInfiniteProps<
  Data extends Record<string, unknown>,
  SortField extends keyof Data,
> = Omit<DataGridProps<Data, SortField>, 'Footer' | 'minDisplayRows'> & {
  /**
   * @example <DataGrid onEndReached={() => console.log('endReached')} />
   * Обработчик подгрузки данных
   */
  onEndReached?: () => void;
  /**
   * флаг достижения конца списка
   */
  isEndReached?: boolean;
};

export const DataGridInfinite = <
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
}: DataGridInfiniteProps<Data, SortField>) => {
  const { handleSelectAllRows, uncheckedRowsCount, renderedPlaceholder } =
    useDataGridCommonUtils<Data>({
      rows,
      selectedRows,
      keyId,
      onSelectRow,
      noDataPlaceholder,
      loading,
    });

  const virtuoso = useRef<VirtuosoHandle>(null);
  const dataLength = rows?.length || 0;
  const isSelectable = Boolean(onSelectRow);
  const isTableDisabled = loading || disabled;
  const [isLoadedMoreThanOne, setIsLoadedMoreThanOne] = useState(false);
  const showEndText = isLoadedMoreThanOne && isEndReached;
  const handleScrollToTop = () => {
    virtuoso.current?.scrollIntoView({ index: 0, behavior: 'smooth' });
  };

  const handleEndReach = useCallback(() => {
    if (!isEndReached && onEndReached) {
      onEndReached();
      setIsLoadedMoreThanOne(true);
    }
  }, [isEndReached, onEndReached]);

  const renderCells = useCallback(
    (row: Data, rowId: string) => {
      return columns.map((cell, index) => {
        const cellKey = `${rowId}-${index}`;

        return (
          <DataGridCell<Data>
            key={cellKey}
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

        return;
      }

      hideStickyButton();
    },
    [hideStickyButton, showStickyButton],
  );

  return (
    <Container maxHeight={maxHeight} className={className}>
      <DataGridInfiniteTableContainer
        {...{ inert: isTableDisabled ? '' : undefined }}
      >
        <TableVirtuoso
          className="virtuosoScroller"
          style={{ height: '100%', width: '100%' }}
          ref={virtuoso}
          overscan={OVERSCAN_COUNT}
          defaultItemHeight={DEFAULT_ROW_HEIGHT}
          endReached={handleEndReach}
          rangeChanged={handleRangeChanged}
          data={rows}
          components={{
            Table: DataGridInfiniteTable,
            TableBody: React.forwardRef(({ children, ...props }, ref) => (
              <TableBody role={'tableBody'} ref={ref} {...props}>
                {rows.length ? children : renderedPlaceholder}
              </TableBody>
            )),
            TableRow: ({ item, ...props }) => (
              <DataGridInfiniteTableRow<Data>
                renderCells={renderCells}
                selectedRows={selectedRows}
                keyId={keyId}
                isSelectable={isSelectable}
                row={item}
                activeRowId={activeRowId}
                onSelectRow={onSelectRow}
                onRowClick={onRowClick}
                {...props}
              />
            ),
          }}
          fixedHeaderContent={() => (
            <DataGridHead<Data, SortField>
              isInfinite
              onSort={onSort}
              rowsCount={rows.length}
              uncheckedRowsCount={uncheckedRowsCount}
              onSelectAllRows={handleSelectAllRows}
              selectable={isSelectable}
              sorting={sorting}
              columns={columns}
            />
          )}
          fixedFooterContent={() => (
            <FooterRow>
              <DataGridInfiniteLoaderWrapper
                colSpan={isSelectable ? columns.length + 1 : columns.length}
              >
                {loading && Boolean(dataLength) && (
                  <CircularProgress color="primary" size="medium" />
                )}
                {showEndText && (
                  <Typography color="textSecondary">
                    {END_OF_SCROLL_MESSAGE}
                  </Typography>
                )}
              </DataGridInfiniteLoaderWrapper>
            </FooterRow>
          )}
        />
        {isStickyButtonActive && (
          <ScrollToTopButton onClick={handleScrollToTop} />
        )}
      </DataGridInfiniteTableContainer>
      {loading && !dataLength && <DataGridLoader disabled={disabled} loading />}
    </Container>
  );
};
