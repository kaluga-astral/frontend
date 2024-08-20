import { type CSSProperties, type ReactNode } from 'react';

import {
  type MainActionKind,
  type SecondaryActionKind,
} from '../ActionCell/types';

import type { SortStates } from './enums';

export type AlignVariant = 'left' | 'center' | 'right';

export type SortState = `${SortStates}`;

export type RenderCell<Data> = (params: Data) => ReactNode;

export type Actions<TActions> = {
  /**
   * Основные действия
   */
  main: MainActionKind<TActions>[];
  /**
   * Второстепенные действия
   */
  secondary?: SecondaryActionKind<TActions>[];
};

export type CellValue = unknown;

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

export type DataGridColumns<TData extends Record<string, CellValue>> = {
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

export type DataGridRowOptionColumns<TData extends Record<string, CellValue>> =
  {
    /**
     * Значение ключа поля данных для колонки
     */
    field: keyof TData;

    /**
     * Кастомное отображение ячеек для колонки
     */
    renderCell?: RenderCell<TData>;
  };

export type DataGridRowOptions<TData extends Record<string, CellValue>> = {
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
   * Если true, строка не будет доступна для выбора
   */
  isNotSelectable?: boolean;

  /**
   * Причина блокировки строки
   */
  disabledReason?: string;

  /**
   * Настройка отображения колонок дочерних элементов
   */
  childrenColumns?: DataGridRowOptionColumns<TData>[];
  /**
   * Причина блокировки строки во время загрузки
   */
  loadingNote?: string;
};

export type DataGridRow = Record<string, CellValue>;

export type DataGridRowWithOptions<TData extends DataGridRow> = TData & {
  options?: DataGridRowOptions<TData>;
  children?: DataGridRowWithOptions<TData>[];
};
