import { type ChangeEvent, useMemo } from 'react';

import { Checkbox } from '../../Checkbox';
import { HeadCell } from '../HeadCell';
import type {
  CellValue,
  DataGridColumns,
  DataGridRow,
  DataGridSort,
} from '../types';

import { useLogic } from './useLogic';
import { CheckboxCell, Wrapper } from './styles';

export type HeadProps<
  TData extends Record<string, CellValue> = DataGridRow,
  TSortField extends keyof TData = keyof TData,
> = {
  /**
   * Конфигурация колонок для таблицы
   */
  columns: DataGridColumns<TData>[];

  /**
   * Конфигурация ширины колонок
   */
  gridColumns: string;

  /**
   * Если true, то будет отображаться чекбокс для выбора элемента
   */
  isSelectable: boolean;

  /**
   * Параметры сортируемой колонки
   */
  sorting?: DataGridSort<TSortField>;

  /**
   * Общее количество строк
   */
  rowsCount: number;

  /**
   * Количество строк, которые не выбраны
   */
  uncheckedRowsCount: number;

  /**
   * Обработчик выбора всех строк
   */
  onSelectAllRows: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Обработчик сортировки
   */
  onSort?: (sorting: DataGridSort<TSortField> | undefined) => void;
};

export const Head = <
  TData extends Record<string, CellValue>,
  TSortField extends keyof TData,
>(
  props: HeadProps<TData, TSortField>,
) => {
  const { checkboxProps, handleSort } = useLogic(props);

  const { columns, gridColumns, isSelectable, sorting, onSelectAllRows } =
    props;

  const renderColumns = useMemo(() => {
    return columns.map(({ field, label, sortable, align }, index) => {
      const isFirstCell = !Boolean(index);

      const startAdornmentRender = () => {
        if (!isFirstCell || !isSelectable) {
          return null;
        }

        return (
          <CheckboxCell>
            <Checkbox {...checkboxProps} onChange={onSelectAllRows} />
          </CheckboxCell>
        );
      };

      return (
        <HeadCell<TData, TSortField>
          key={label}
          sorting={sorting}
          field={field}
          label={label}
          isSortable={sortable}
          align={align}
          startAdornment={startAdornmentRender()}
          onSort={handleSort}
        />
      );
    });
  }, [columns, sorting, handleSort]);

  return <Wrapper $gridColumns={gridColumns}>{renderColumns}</Wrapper>;
};
