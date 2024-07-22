import { type CSSProperties, type ReactNode } from 'react';

import type { SortStates } from './enums';

export type AlignVariant = 'left' | 'center' | 'right';

export type SortState = `${SortStates}`;

export type RenderCell<Data> = (params: Data) => ReactNode;

export type CellOptions<CellValue> = {
  renderCell?: RenderCell<CellValue>;
};

export type CellValue =
  | string
  | number
  | boolean
  | Date
  | undefined
  | {
      children?: CellValue;
      options?: CellOptions<CellValue>;
    };

export type DataGridRow = Record<string, CellValue>;

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
   * Название колонки таблицы
   */
  label?: string;

  /**
   * Если true, будет включена сортировка колонки
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
   * CSS свойство размещения контента в ячейке
   */
  align?: AlignVariant;

  /**
   * @example {width: '100%'}
   * Ширина ячейка. Допустимые единицы: px, %, fr
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
