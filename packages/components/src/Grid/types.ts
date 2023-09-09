import { ElementType, ReactNode } from 'react';

export type GridPropsBase = {
  /**
   * @description Задаёт display: grid; Если задан columns, spacing и тп, то включается автоматически
   * @default false
   */
  container?: boolean;
  /**
   * @description Количество равных колонок,
   * либо текстовое значение соответствующее grid-template-columns
   * @default undefined
   */
  columns?: number | string;
  /**
   * @description Количество равных рядов,
   * либо текстовое значение соответствующее grid-template-rows
   * @default undefined
   */
  rows?: number | string;
  /**
   * @description Отступы между колонками
   * @default undefined
   */
  columnSpacing?: number;
  /**
   * @description Отступы между рядами
   * @default undefined
   */
  rowSpacing?: number;
  /**
   * @description Отступы между колонками и рядами. Если передан массив: Первый элемент - отступ между рядами, второй - между колонками
   * @default undefined
   */
  spacing?: number | [number, number];
  /**
   * @description Соответствует grid-autoflow
   * @default 	'row'
   */
  direction?: 'row' | 'column' | 'dense';
  /**
   * @description Тип элемента
   * @default 	'div'
   */
  component?: ElementType;
  children?: ReactNode;
};
