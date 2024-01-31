import { type ReactNode, useCallback } from 'react';

import { Table } from '../Table';

import { DataGridHead } from './DataGridHead';
import { DataGridBody } from './DataGridBody';
import DataGridLoader from './DataGridLoader/DataGridLoader';
import { DataGridNoData } from './DataGridNoData';
import {
  DataGridContainer,
  DisabledTableContainer,
  StyledTableContainer,
} from './styles';
import {
  type DataGridColumns,
  type DataGridRow,
  type DataGridSort,
} from './types';
import { useDataGridCommonUtils } from './hooks';

export type DataGridProps<
  Data extends Record<string, unknown> = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  className?: string;
  /**
   * @example <DataGrid rows={[{name: 'test'}]} />
   * Массив данных для таблицы
   */
  rows: Data[];
  /**
   * @example <DataGrid columns={[
   *   {
   *     field: 'test',
   *     label: 'Тестовая колонка',
   *     sortable: true,
   *   }]} />
   * Конфигурация колонок для таблицы
   */
  columns: DataGridColumns<Data>[];
  /**
   * @example <DataGrid activeRowId={activeId} />
   * Идентификатор активного элемента массива rows. Выделяет активную строку в таблице
   */
  activeRowId?: string;
  keyId: keyof DataGridRow;
  /**
   * @example <DataGrid onRowClick={(row) => console.log('clicked')} />
   * Обработчик клика строки таблицы
   */
  onRowClick?: (row: Data) => void;
  /**
   * @example <DataGrid selectedRows={[{name: 'test'}]} />
   * Массив выбранных строк
   */
  selectedRows?: Array<Data>;
  /**
   * @example <DataGrid onSelectRow={(row) => console.log(select)} />
   * Обработчик выбора строки
   */
  onSelectRow?: (row: Data[]) => void;
  /**
   * @example <DataGrid sorting={{fieldId: 'test', sort: 'asc'}} />
   * Параметры сортируемой колонки
   */
  sorting?: DataGridSort<SortField>;
  /**
   * @example <DataGrid onSort={({fieldId: 'test', sort: 'asc'}) => console.log('sorted')} />
   * Обработчик сортировки
   */
  onSort?: (sorting: DataGridSort<SortField> | undefined) => void;
  /**
   * @example <DataGrid  Footer={<DataGridPagination />} />
   * Компонент кастомного футера (н-р Pagination)
   */
  Footer?: ReactNode;
  /**
   * @example <DataGrid  noDataPlaceholder={<DataGridNoData />} />
   *  Используется для отображения placeholder при отсутствии данных в таблице
   */
  noDataPlaceholder?: ReactNode;
  /**
   * @example <DataGrid  maxHeight={900} />
   * Максимальная высота для таблицы
   */
  maxHeight?: number;
  /**
   * @example <DataGrid  loading={true} />
   * Флажок загрузки данных
   */
  loading?: boolean;
  /**
   * @example <DataGrid  disabled={true} />
   * Флажок блокировки таблицы
   */
  disabled?: boolean;
  /**
   * @default '-'
   * @example <DataGrid  emptyCellValue{'Нет данных'} />
   * Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)
   */
  emptyCellValue?: ReactNode;
  /**
   * @default 10
   * @example <DataGrid  minDisplayRows{10} />
   *  Используется для отображения переданного кол-ва строк при отсутствии данных
   */
  minDisplayRows?: number;
};

export function DataGrid<
  Data extends Record<string, unknown> = DataGridRow,
  SortField extends keyof Data = keyof Data,
>({
  columns,
  rows = [],
  selectedRows = [],
  sorting,
  maxHeight,
  minDisplayRows = 10,
  onRowClick,
  onSelectRow,
  Footer,
  noDataPlaceholder,
  loading,
  disabled,
  onSort,
  keyId,
  activeRowId,
  emptyCellValue,
  className,
}: DataGridProps<Data, SortField>) {
  const { handleSelectAllRows, handleSelectRow, uncheckedRowsCount } =
    useDataGridCommonUtils<Data>({
      rows,
      selectedRows,
      keyId,
      onSelectRow,
      noDataPlaceholder,
      loading,
    });
  const selectable = Boolean(onSelectRow);
  const isTableDisabled = loading || disabled;

  const TableContainer = isTableDisabled
    ? DisabledTableContainer
    : StyledTableContainer;

  const renderedPlaceholder = useCallback(() => {
    if (!loading) {
      return noDataPlaceholder || <DataGridNoData />;
    }

    return null;
  }, [noDataPlaceholder, loading]);

  return (
    <DataGridContainer maxHeight={maxHeight} className={className}>
      <TableContainer inert={isTableDisabled ? '' : undefined}>
        <Table stickyHeader>
          <DataGridHead<Data, SortField>
            onSort={onSort}
            rowsCount={rows.length}
            uncheckedRowsCount={uncheckedRowsCount}
            onSelectAllRows={handleSelectAllRows}
            selectable={selectable}
            sorting={sorting}
            columns={columns}
          />
          <DataGridBody<Data>
            activeRowId={activeRowId}
            keyId={keyId}
            selectedRows={selectedRows}
            minDisplayRows={minDisplayRows}
            onRowClick={onRowClick}
            onSelectRow={handleSelectRow}
            selectable={selectable}
            rows={rows}
            columns={columns}
            emptyCellValue={emptyCellValue}
            noDataPlaceholder={renderedPlaceholder()}
          />
        </Table>
      </TableContainer>
      <DataGridLoader disabled={disabled} loading={loading} />
      {Footer}
    </DataGridContainer>
  );
}
