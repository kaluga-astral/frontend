import { ChangeEvent, ReactNode, useCallback, useMemo } from 'react';

import { Table } from '../Table';

import { DataGridHead } from './DataGridHead';
import { DataGridBody } from './DataGridBody';
import DataGridLoader from './DataGridLoader/DataGridLoader';
import { DataGridContainer, StyledTableContainer } from './styled';
import { DataGridColumns, DataGridRow, DataGridSort } from './types';

export type DataGridProps<
  Data = DataGridRow,
  SortField extends keyof Data = keyof Data,
> = {
  /**
   * Массив данных для таблицы
   */
  rows: Data[];
  /**
   * Конфигурация колонок для таблицы
   */
  columns: DataGridColumns<Data>[];
  keyId: keyof DataGridRow;
  /**
   * Обработчик клика строки таблицы
   */
  onRowClick?: (row: Data) => void;
  /**
   * Массив выбранных строк
   */
  selectedRows?: Array<Data>;
  /**
   * Обработчик выбора строки
   */
  onSelectRow?: (row: Data[]) => void;
  /**
   * Массив сортируемых колонок
   */
  sorting?: DataGridSort<SortField>[];
  /**
   * Обработчик сортировки
   */
  onSort: (sorting: DataGridSort<SortField>[]) => void;
  /**
   * Компонент кастомного футера (н-р Pagination)
   */
  Footer?: ReactNode;
  /**
   * Максимальная высота для таблицы
   */
  maxHeight?: number;
  /**
   * Флажок загрузки данных
   */
  loading?: boolean;
  /**
   * Заглушка для пустых ячеек (если отсутствует field и filter и renderCell)
   */
  emptyCellValue?: ReactNode;
  /**
   *  используется для отображения переданного кол-ва строк при отсутствии данных
   */
  minDisplayRows?: number;
};

export function DataGrid<Data extends object, SortField extends keyof Data>({
  columns,
  rows = [],
  selectedRows = [],
  sorting = [],
  maxHeight,
  minDisplayRows = 10,
  onRowClick,
  onSelectRow,
  Footer,
  loading,
  onSort,
  keyId,
  emptyCellValue,
}: DataGridProps<Data, SortField>) {
  const selectable = Boolean(onSelectRow);

  const handleSelectAllRows = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!onSelectRow) {
      return;
    }

    if (event.target.checked) {
      const mergedSelectedRows = [...selectedRows, ...rows];

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
    return rows.filter(
      (row) =>
        !selectedRows.find((selectedRow) => selectedRow[keyId] === row[keyId]),
    ).length;
  }, [rows, selectedRows, keyId]);

  return (
    <DataGridContainer>
      <StyledTableContainer maxHeight={maxHeight}>
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
            keyId={keyId}
            selectedRows={selectedRows}
            minDisplayRows={minDisplayRows}
            onRowClick={onRowClick}
            onSelectRow={handleSelectRow}
            selectable={selectable}
            rows={rows}
            columns={columns}
            emptyCellValue={emptyCellValue}
          />
        </Table>
        <DataGridLoader loading={loading} />
      </StyledTableContainer>
      {Footer}
    </DataGridContainer>
  );
}
