import { type ChangeEvent, type ReactNode, useCallback, useMemo } from 'react';

import { Table } from '../Table';
import { prop, uniqBy } from '../utils';

import { DataGridHead } from './DataGridHead';
import { DataGridBody } from './DataGridBody';
import { DataGridLoader } from './DataGridLoader';
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
  TData extends Record<string, unknown> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = {
  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   * Массив данных для таблицы
   */
  rows: Array<TData & { options?: DataGridRowOptions }>;

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

  keyId: keyof TData;

  /**
   * Обработчик клика строки таблицы
   */
  onRowClick?: (row: TData) => void;

  /**
   * @example <DataGrid selectedRows={[{name: 'test'}]} />
   * Массив выбранных строк
   */
  selectedRows?: Array<TData>;

  /**
   * Обработчик выбора строки
   */
  onSelectRow?: (row: TData[]) => void;

  /**
   * @example <DataGrid sorting={{fieldId: 'test', sort: 'asc'}} />
   * Параметры сортируемой колонки
   */
  sorting?: DataGridSort<TSortField>;

  /**
   * @example <DataGrid onSort={({fieldId: 'test', sort: 'asc'}) => console.log('sorted')} />
   * Обработчик сортировки
   */
  onSort?: (sorting: DataGridSort<TSortField> | undefined) => void;

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

/**
 * @deprecated
 * Используйте NewDateGrid
 */
export const DataGrid = <
  TData extends Record<string, unknown> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
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
}: DataGridProps<TData, TSortField>) => {
  const selectable = Boolean(onSelectRow);
  const isTableDisabled = loading || disabled;

  const availableRows = rows.filter((row) => !row.options?.isDisabled);

  const TableContainer = isTableDisabled
    ? DisabledTableContainer
    : StyledTableContainer;

  const handleSelectAllRows = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!onSelectRow) {
      return;
    }

    if (event.target.checked) {
      const mergedSelectedRows = uniqBy(
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

        return onSelectRow(
          selectedRows.filter(
            (selectedRow) => selectedRow[keyId] !== row[keyId],
          ),
        );
      },
    [selectedRows, onSelectRow, keyId],
  );

  const uncheckedRowsCount = useMemo(() => {
    return availableRows.filter(
      (row) =>
        !selectedRows.find((selectedRow) => selectedRow[keyId] === row[keyId]),
    ).length;
  }, [availableRows, selectedRows, keyId]);

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
          <DataGridHead<TData, TSortField>
            onSort={onSort}
            rowsCount={availableRows.length}
            uncheckedRowsCount={uncheckedRowsCount}
            onSelectAllRows={handleSelectAllRows}
            selectable={selectable}
            sorting={sorting}
            columns={processedColumns()}
          />
          <DataGridBody<TData>
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
};
