import { useCallback, useContext } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { ConfigContext } from '../ConfigProvider';
import { ContentState } from '../ContentState';
import { CircularProgress } from '../CircularProgress';
import { checkIsDisabled } from '../NewDataGrid/Row/utils';
import {
  Container,
  type DataGridRow,
  type DataGridRowOptions,
  type NewDataGridProps,
} from '../NewDataGrid';
import { Head } from '../NewDataGrid/Head';
import { Row } from '../NewDataGrid/Row';
import { Cell } from '../NewDataGrid/Cell';
import { ScrollToTopButton } from '../ScrollToTopButton';

import { DEFAULT_ROW_HEIGHT, OVERSCAN_COUNT } from './constants';
import { useLogic } from './useLogic';
import { List } from './List';
import { EndData } from './EndData';
import { Error } from './Error';
import { NoData } from './NoData';
import { DataGridWrapper, FooterRow } from './styles';

export type NewDataGridInfiniteProps<
  TData extends Record<string, unknown>,
  TSortField extends keyof TData,
> = Omit<NewDataGridProps<TData, TSortField>, 'Footer' | 'minDisplayRows'> & {
  /**
   * Флаг достижения конца списка
   */
  isEndReached?: boolean;

  /**
   * Текст достижения конца списка
   */
  endOfScrollMsg?: string;

  /**
   * Обработчик подгрузки данных
   */
  onEndReached?: () => void;
};

export const NewDataGridInfinite = <
  TData extends Record<string, unknown> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
>(
  props: NewDataGridInfiniteProps<TData, TSortField>,
) => {
  const { imagesMap } = useContext(ConfigContext);

  const {
    isNoData,
    isDataGridDisabled,
    isStickyButtonActive,
    virtuosoProps,
    headProps,
    rowProps,
    scrollToTopButtonProps,
  } = useLogic(props);

  const {
    columns,
    rows = [],
    selectedRows = [],
    sorting,
    maxHeight,
    onRowClick,
    isLoading,
    isDisabled,
    onSort,
    keyId,
    activeRowId,
    emptyCellValue,
    className,
    isEndReached,
    isError,
    endOfScrollMsg,
    errorMsg,
    noDataPlaceholder,
    onRetry,
  } = props;

  const renderCells = useCallback(
    (row: TData, rowId: string, options?: DataGridRowOptions) => {
      const { isDisabledLastCell = true } = options || {};

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
          <Cell<TData>
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

  return (
    <Container $maxHeight={maxHeight} className={className}>
      <DataGridWrapper {...{ inert: isDataGridDisabled ? '' : undefined }}>
        <Head<TData, TSortField>
          {...headProps}
          onSort={onSort}
          rowsCount={rows.length}
          sorting={sorting}
          columns={columns}
        />

        <ContentState
          isLoading={isLoading && !isNoData}
          isError={isError && !isNoData}
          errorState={{
            imgAlt: 'Что-то пошло не так',
            errorList: [errorMsg || ''],
            imgSrc: imagesMap.defaultErrorImgSrc,
            onRetry,
          }}
        >
          <Virtuoso
            {...virtuosoProps}
            style={{ height: '100%' }}
            overscan={OVERSCAN_COUNT}
            defaultItemHeight={DEFAULT_ROW_HEIGHT}
            data={rows}
            itemContent={(_, { options, ...row }) => {
              const rowId = (row as TData)[keyId] as string;

              return <>{renderCells(row as TData, rowId, options)}</>;
            }}
            components={{
              // @ts-ignore
              // Требует HTMLDivElement, а для элемента списка используем HTMLUListElement
              List,
              Item: ({ children, item, ...itemProps }) => {
                const { options, ...row } = item;

                return (
                  <Row
                    {...rowProps}
                    {...itemProps}
                    row={row as TData}
                    selectedRows={selectedRows}
                    options={options}
                    keyId={keyId}
                    activeRowId={activeRowId}
                    onRowClick={onRowClick}
                  >
                    {children}
                  </Row>
                );
              },
              EmptyPlaceholder: () => <>{noDataPlaceholder || <NoData />}</>,
              Footer: () => (
                <FooterRow>
                  {isLoading && <CircularProgress color="primary" />}
                  {isError && <Error onRetry={onRetry} />}
                  {isEndReached && <EndData endOfScrollMsg={endOfScrollMsg} />}
                </FooterRow>
              ),
            }}
          />
        </ContentState>

        {isStickyButtonActive && (
          <ScrollToTopButton {...scrollToTopButtonProps} />
        )}
      </DataGridWrapper>
    </Container>
  );
};
