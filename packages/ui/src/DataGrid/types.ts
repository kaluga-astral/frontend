import { CSSProperties, ReactNode } from 'react';
import { TableCellProps } from '@mui/material';

import { SortStates } from './constants';

export type CellValue = string | number | boolean | Date | undefined | object;

export type SortState = `${SortStates}`;

export type RenderCell<Data> = (params: Data) => ReactNode;

export type DataGridRow = Record<string, any>;

export type DataGridSort<SortField> = {
  /**
   * Значение поля сортируемой колонки
   */
  fieldId: SortField;
  /**
   * Значение возрастающий или убывающий сортировки (asc | desc)
   */
  sort: SortState;
};

export type DataGridColumns<Data extends {}> = {
  /**
   * Значение ключа поля данных для колонки
   */
  field?: keyof Data;
  /**
   * Название колонки таблицы
   */
  label?: string;
  /**
   * Флажок включающий сортировку колонки
   */
  sortable?: boolean;
  pointer?: boolean;
  /**
   * Кастомное отображение ячеек для колонки
   */
  renderCell?: RenderCell<Data>;
  /**
   * Функция для кастомного форматирования данных ячеек для колонки
   */
  format?: (data: Data) => CellValue;
  /**
   * CSS свойство размещения контента в ячейке
   */
  align?: TableCellProps['align'];
  /**
   * CSS свойство ширины ячейки
   */
  width?: CSSProperties['width'];
};
