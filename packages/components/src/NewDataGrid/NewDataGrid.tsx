import { type ReactNode, useCallback, useContext } from 'react';

import { ConfigContext } from '../ConfigProvider';

import {
  EXPANDED_LEVEL_BY_DEFAULT,
  INITIAL_OPENED_NESTED_CHILDREN_COUNT_BY_DEFAULT,
  MIN_DISPLAY_ROWS_BY_DEFAULT,
} from './constants';
import { Variant } from './enums';
import { useLogic } from './useLogic';
import { Head } from './Head';
import { Body } from './Body';
import { Loader } from './Loader';
import { NoData, type NoDataProps } from './NoData';
import { Container, DataGridWrapper, DisabledDataGridWrapper } from './styles';
import type {
  CellValue,
  DataGridColumns,
  DataGridRow,
  DataGridRowWithOptions,
  DataGridSort,
} from './types';

export type NewDataGridProps<
  TData extends Record<string, CellValue> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = {
  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   * Массив данных для таблицы
   */
  rows: DataGridRowWithOptions<TData>[];

  /**
   * @example <DataGrid columns={[
   *   {
   *     field: 'test',
   *     label: 'Тестовая колонка',
   *     sortable: true,
   *   }]} />
   * Конфигурация колонок для таблицы
   */
  columns: DataGridColumns<TData>[];

  /**
   * Идентификатор активного элемента массива rows. Выделяет активную строку в таблице
   */
  activeRowId?: string;

  /**
   * Поле, которое будет использоваться в качестве ключа
   */
  keyId: keyof TData;

  /**
   * @example <DataGrid selectedRows={[{name: 'test'}]} />
   * Массив выбранных строк
   */
  selectedRows?: Array<TData>;

  /**
   * @example <DataGrid sorting={{fieldId: 'test', sort: 'asc'}} />
   * Параметры сортируемой колонки
   */
  sorting?: DataGridSort<TSortField>;

  /**
   * Компонент кастомного футера (например Pagination)
   */
  footer?: ReactNode;

  /**
   *  Используется для отображения placeholder при отсутствии данных в таблице
   */
  noDataPlaceholder?: ReactNode;

  /**
   * Максимальная высота для таблицы
   */
  maxHeight?: number;

  /**
   * Если true, показывается анимация загрузки
   */
  isLoading?: boolean;

  /**
   * Если true, таблица будет заблокирована для взаимодействия
   */
  isDisabled?: boolean;

  /**
   * Флаг состояния ошибки
   */
  isError?: boolean;

  /**
   * Текст ошибки
   */
  errorMsg?: string;

  /**
   * Вариант отображения вложенных элементов
   * @default 'tree'
   */
  variant?: `${Variant}`;

  /**
   * Опции для отображения древовидных списков
   * Применяется если variant="tree"
   */
  tree?: {
    /**
     * Если true, то дерево будет раскрыто по умолчанию
     * @default 'false'
     */
    isInitialExpanded?: boolean;

    /**
     * Уровень раскрытия дерева по умолчанию, при `isInitialExpanded=true`
     * @default '1'
     */
    expandedLevel?: number;

    /**
     * Количество отображаемых по умолчанию дочерних элементов
     * @default '2'
     */
    initialVisibleChildrenCount?: number;
  };

  /**
   * Опции для отображения вложенных списков
   * Применяется если variant="subrows"
   */
  subrows?: {
    /**
     * Уровень раскрытия дочерних элементов по умолчанию, при `isInitialExpanded=true`
     * @default '1'
     */
    expandedLevel?: number;

    /**
     * Количество отображаемых по умолчанию дочерних элементов
     * @default '2'
     */
    initialVisibleChildrenCount?: number;

    /**
     * Номер колонки, в которой будет расположена кнопка "Показать все"
     * @default 1
     */
    moreButtonColumnPosition?: number;
  };

  /**
   * Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)
   * @default '—'
   */
  emptyCellValue?: ReactNode;

  /**
   * Используется для отображения переданного кол-ва строк при отсутствии данных
   * @default 10
   */
  minDisplayRows?: number;

  /**
   * Функция обработки нажатия на кнопку "Повторить запрос"
   */
  onRetry: () => void;

  /**
   * Обработчик клика строки таблицы
   */
  onRowClick?: (row: TData) => void;

  /**
   * Обработчик выбора строки
   */
  onSelectRow?: (row: TData[]) => void;

  /**
   * @example <DataGrid onSort={({fieldId: 'test', sort: 'asc'}) => console.log('sorted')} />
   * Обработчик сортировки
   */
  onSort?: (sorting: DataGridSort<TSortField> | undefined) => void;
  /**
   * Используется для кастомизации компонента, использующегося в сценарии отсутствия данных
   */
  noDataOptions?: NoDataProps;
};

export const NewDataGrid = <
  TData extends Record<string, CellValue> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
>(
  props: NewDataGridProps<TData, TSortField>,
) => {
  const {
    isDataGridDisabled,
    treeRenderConfig,
    headProps,
    bodyProps,
    loaderProps,
  } = useLogic(props);

  const { emptySymbol } = useContext(ConfigContext);

  const {
    columns,
    rows = [],
    selectedRows = [],
    sorting,
    maxHeight,
    minDisplayRows = MIN_DISPLAY_ROWS_BY_DEFAULT,
    errorMsg,
    variant = Variant.Tree,
    footer,
    noDataPlaceholder,
    isLoading,
    isError,
    subrows,
    keyId,
    activeRowId,
    emptyCellValue = emptySymbol,
    className,
    onRowClick,
    onSort,
    noDataOptions,
    onRetry,
  } = props;

  const { moreButtonColumnPosition = 1 } = subrows || {};

  const {
    isInitialExpanded = false,
    expandedLevel = EXPANDED_LEVEL_BY_DEFAULT,
    initialVisibleChildrenCount = INITIAL_OPENED_NESTED_CHILDREN_COUNT_BY_DEFAULT,
  } = treeRenderConfig || {};

  const TableContainer = isDataGridDisabled
    ? DisabledDataGridWrapper
    : DataGridWrapper;

  const renderedPlaceholder = useCallback(() => {
    if (!isLoading) {
      return noDataPlaceholder || <NoData {...noDataOptions} />;
    }

    return null;
  }, [noDataPlaceholder, noDataOptions, isLoading]);

  return (
    <Container $maxHeight={maxHeight} className={className}>
      <TableContainer {...{ inert: isDataGridDisabled ? '' : undefined }}>
        <Head<TData, TSortField>
          {...headProps}
          sorting={sorting}
          onSort={onSort}
        />

        <Body<TData>
          {...bodyProps}
          activeRowId={activeRowId}
          keyId={keyId}
          selectedRows={selectedRows}
          minDisplayRows={minDisplayRows}
          rows={rows}
          columns={columns}
          variant={variant}
          emptyCellValue={emptyCellValue}
          isInitialExpanded={isInitialExpanded}
          expandedLevel={expandedLevel}
          initialVisibleChildrenCount={initialVisibleChildrenCount}
          moreButtonColumnPosition={moreButtonColumnPosition}
          isLoading={isLoading}
          isError={isError}
          errorMsg={errorMsg}
          noDataPlaceholder={renderedPlaceholder()}
          onRowClick={onRowClick}
          onRetry={onRetry}
        />
      </TableContainer>

      <Loader {...loaderProps} />

      {footer && footer}
    </Container>
  );
};
