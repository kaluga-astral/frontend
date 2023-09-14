import { ElementType, ReactNode } from 'react';

export type GridPropsBase = {
  /**
   * Задаёт display: grid; Если задан columns, spacing и тп, то включается автоматически
   * @default false
   */
  container?: boolean;
  /**
   * Количество равных колонок,
   * либо текстовое значение соответствующее grid-template-columns
   * @default undefined
   */
  columns?: number | string;
  /**
   * Количество равных рядов,
   * либо текстовое значение соответствующее grid-template-rows
   * @default undefined
   */
  rows?: number | string;
  /**
   * Отступы между колонками
   * @default undefined
   */
  columnSpacing?: number;
  /**
   * Отступы между рядами
   * @default undefined
   */
  rowSpacing?: number;
  /**
   * Отступы между колонками и рядами. Если передан массив: Первый элемент - отступ между рядами, второй - между колонками
   * @default undefined
   */
  spacing?: number | [number, number];
  /**
   * Соответствует grid-autoflow
   * @default 	'row'
   */
  direction?: 'row' | 'column' | 'dense';
  /**
   * Тип элемента
   * @default 	'div'
   */
  component?: ElementType;
  children?: ReactNode;
};
