import { type ChangeEvent, type ReactNode, useCallback, useMemo } from 'react';

import { Table } from '../Table';
import { prop, uniqBy } from '../utils';

import { DataGridHead } from './DataGridHead';
import { DataGridBody } from './DataGridBody';
import DataGridLoader from './DataGridLoader/DataGridLoader';
import { DataGridNoData } from './DataGridNoData';
import {
  Container,
  DisabledTableContainer,
  StyledTableContainer,
} from './styles';
import type {
  DataGridColumns,
  DataGridRow,
  DataGridRowOptions,
  DataGridSort,
} from './types';

export type DataGridProps<
  Data extends Record<string, unknown> = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   * Массив данных для таблицы
   */
  rows: (Data & { options?: DataGridRowOptions })[];

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
   * Идентификатор активного элемента массива rows. Выделяет активную строку в таблице
   */
  activeRowId?: string;

  keyId: keyof Data;

  /**
   * Обработчик клика строки таблицы
   */
  onRowClick?: (row: Data) => void;

  /**
   * @example <DataGrid selectedRows={[{name: 'test'}]} />
   * Массив выбранных строк
   */
  selectedRows?: Array<Data>;

  /**
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
   * Компонент кастомного футера (н-р Pagination)
   */
  Footer?: ReactNode;

  /**
   *  Используется для отображения placeholder при отсутствии данных в таблице
   */
  noDataPlaceholder?: ReactNode;

  /**
   * Максимальная высота для таблицы
   */
  maxHeight?: number;

  /**
   * Флажок загрузки данных
   */
  loading?: boolean;

  /**
   * Флажок блокировки таблицы
   */
  disabled?: boolean;

  /**
   * Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)
   * @default '-'
   */
  emptyCellValue?: ReactNode;

  /**
   * Используется для отображения переданного кол-ва строк при отсутствии данных
   * @default 10
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
  const selectable = Boolean(onSelectRow);
  const isTableDisabled = loading || disabled;

  const notDisabledRows = rows.filter((row) => !row.options?.isDisabled);

  const TableContainer = isTableDisabled
    ? DisabledTableContainer
    : StyledTableContainer;

  const handleSelectAllRows = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!onSelectRow) {
      return;
    }

    if (event.target.checked) {
      const mergedSelectedRows = uniqBy(
        [...selectedRows, ...notDisabledRows],
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
    return notDisabledRows.filter(
      (row) =>
        !selectedRows.find((selectedRow) => selectedRow[keyId] === row[keyId]),
    ).length;
  }, [notDisabledRows, selectedRows, keyId]);

  const renderedPlaceholder = useCallback(() => {
    if (!loading) {
      return noDataPlaceholder || <DataGridNoData />;
    }

    return null;
  }, [noDataPlaceholder, loading]);

  const processedColumns = useCallback(() => {
    if (rows.length <= 1) {
      return columns.map((column) => ({ ...column, sortable: false }));
    }

    return columns;
  }, [columns, rows]);

  return (
    <Container maxHeight={maxHeight} className={className}>
      <TableContainer inert={isTableDisabled ? '' : undefined}>
        <Table stickyHeader>
          <DataGridHead<Data, SortField>
            onSort={onSort}
            rowsCount={notDisabledRows.length}
            uncheckedRowsCount={uncheckedRowsCount}
            onSelectAllRows={handleSelectAllRows}
            selectable={selectable}
            sorting={sorting}
            columns={processedColumns()}
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
    </Container>
  );
}
