import { type CSSProperties, type ReactNode } from 'react';
import { type TableCellProps } from '@mui/material';

import { type SortStates } from './enums';

export type CellValue = string | number | boolean | Date | undefined | object;

export type SortState = `${SortStates}`;

export type RenderCell<Data> = (params: Data) => ReactNode;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataGridRow = Record<string, any>;

export type DataGridSort<TSortField> = {
  /**
   * @example {fieldId: 'test'}
   * Значение поля сортируемой колонки
   */
  fieldId: TSortField;

  /**
   * @example {sort: 'asc'}
   * Значение возрастающий или убывающий сортировки (asc | desc)
   */
  sort: SortState;
};

export type DataGridColumns<TData extends object> = {
  /**
   * @example {field: 'test'}
   * Значение ключа поля данных для колонки
   */
  field?: keyof TData;

  /**
   * @example {label: 'Тестовая колонка'}
   * Название колонки таблицы
   */
  label?: string;

  /**
   * @example {sortable: 'true'}
   * Флажок включающий сортировку колонки
   */
  sortable?: boolean;
  pointer?: boolean;

  /**
   * @example {renderCell: (row) => <div>Hello Cell</div>'}
   * Кастомное отображение ячеек для колонки
   */
  renderCell?: RenderCell<TData>;

  /**
   * @example {format: (row) => new Date(row.createDate).toLocaleDateString()}
   * Функция для кастомного форматирования данных ячеек для колонки
   */
  format?: (data: TData) => CellValue;

  /**
   * @example {align: 'left'}
   * CSS свойство размещения контента в ячейке
   */
  align?: TableCellProps['align'];

  /**
   * @example {width: '100%'}
   * CSS свойство ширины ячейки
   */
  width?: CSSProperties['width'];
};

export type DataGridRowOptions = {
  /**
   * Если true, строка будет недоступна для взаимодействия
   */
  isDisabled?: boolean;

  /**
   * Если true, последняя ячейка не будет блокироваться при `isDisabled=true`
   * @default 'true'
   */
  isDisabledLastCell?: boolean;

  /**
   * Причина блокировки строки
   */
  disabledReason?: string;
};
