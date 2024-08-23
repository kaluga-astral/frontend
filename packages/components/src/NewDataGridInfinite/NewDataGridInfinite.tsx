import { useContext } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { ConfigContext } from '../ConfigProvider';
import { ContentState } from '../ContentState';
import { CircularProgress } from '../CircularProgress';
import {
  type CellValue,
  Container,
  type DataGridRow,
  EXPANDED_LEVEL_BY_DEFAULT,
  Head,
  INITIAL_OPENED_NESTED_CHILDREN_COUNT_BY_DEFAULT,
  type NewDataGridProps,
  Row,
  RowContextProvider,
} from '../NewDataGrid';
import { DataGridContextProvider } from '../NewDataGrid/DataGridContext';
import { ScrollToTopButton } from '../ScrollToTopButton';

import { OVERSCAN_COUNT } from './constants';
import { useLogic } from './useLogic';
import { List } from './List';
import { EndData } from './EndData';
import { Error } from './Error';
import { NoData } from './NoData';
import {
  Backdrop,
  DataGridWrapper,
  DisabledDataGridWrapper,
  FooterRow,
} from './styles';

export type NewDataGridInfiniteProps<
  TData extends Record<string, CellValue>,
  TSortField extends keyof TData,
> = Omit<NewDataGridProps<TData, TSortField>, 'footer' | 'minDisplayRows'> & {
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

const INITIAL_LEVEL = 0;

export const NewDataGridInfinite = <
  TData extends Record<string, CellValue> = DataGridRow,
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
    isLoading,
    isDisabled,
    keyId,
    activeRowId,
    emptyCellValue,
    tree,
    className,
    isEndReached,
    isError,
    endOfScrollMsg,
    errorMsg,
    noDataPlaceholder,
    onRowClick,
    onSort,
    onRetry,
  } = props;

  const {
    isInitialExpanded = false,
    expandedLevel = EXPANDED_LEVEL_BY_DEFAULT,
    initialVisibleChildrenCount = INITIAL_OPENED_NESTED_CHILDREN_COUNT_BY_DEFAULT,
  } = tree || {};

  const TableContainer = isDisabled ? DisabledDataGridWrapper : DataGridWrapper;

  return (
    <DataGridContextProvider>
      <Container $maxHeight={maxHeight} className={className}>
        <TableContainer {...{ inert: isDataGridDisabled ? '' : undefined }}>
          <Head<TData, TSortField>
            {...headProps}
            onSort={onSort}
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
              data={rows}
              components={{
                // @ts-ignore
                // Требует HTMLDivElement, а для элемента списка используем HTMLUListElement
                // https://github.com/petyosi/react-virtuoso/issues/864
                List,
                Item: ({ children, item, ...itemProps }) => {
                  const { children: nestedChildren, options, ...row } = item;

                  return (
                    <RowContextProvider>
                      <Row
                        {...rowProps}
                        {...itemProps}
                        row={row as TData}
                        columns={columns}
                        selectedRows={selectedRows}
                        options={options}
                        keyId={keyId}
                        activeRowId={activeRowId}
                        level={INITIAL_LEVEL}
                        nestedChildren={nestedChildren as Array<TData>}
                        isInitialExpanded={isInitialExpanded}
                        expandedLevel={expandedLevel}
                        initialVisibleChildrenCount={
                          initialVisibleChildrenCount
                        }
                        emptyCellValue={emptyCellValue}
                        onRowClick={onRowClick}
                      />
                    </RowContextProvider>
                  );
                },
                EmptyPlaceholder: () => <>{noDataPlaceholder || <NoData />}</>,
                Footer: () => (
                  <FooterRow>
                    {isLoading && <CircularProgress color="primary" />}
                    {isError && <Error onRetry={onRetry} />}
                    {isEndReached && (
                      <EndData endOfScrollMsg={endOfScrollMsg} />
                    )}
                  </FooterRow>
                ),
              }}
            />
          </ContentState>

          {isStickyButtonActive && (
            <ScrollToTopButton {...scrollToTopButtonProps} />
          )}

          {isDisabled && <Backdrop />}
        </TableContainer>
      </Container>
    </DataGridContextProvider>
  );
};
