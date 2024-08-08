import { styled } from '../styles';
import { type Theme } from '../theme';

import { GridComponent } from './GridComponent';

export type StyledGridProps = {
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
};

/**
 * Если аргумент - массив, то возвращаем его, иначе кладем аргумент в массив
 */
const ensureArray = <T = unknown>(arg: T | T[]): T[] =>
  Array.isArray(arg) ? arg : [arg];

/**
 * Проходит по массиву со значениями отступов и превращает в строку
 */
const setCss = (prop: number | [number, number], theme: Theme) =>
  ensureArray(prop)
    .map((value) => theme.spacing(value))
    .join(' ');

const getTemplateStyle = (value?: number | string): string | undefined => {
  if (typeof value === 'number') {
    return `repeat(${value}, 1fr)`;
  }

  return value;
};

export const StyledGrid = styled(GridComponent, {
  shouldForwardProp: (prop: string) =>
    ![
      'container',
      'columns',
      'rows',
      'direction',
      'columnSpacing',
      'rowSpacing',
      'spacing',
    ].includes(prop),
})<StyledGridProps>`
  ${({ theme, columnSpacing }) =>
    columnSpacing && `column-gap: ${theme.spacing(columnSpacing)};`};
  ${({ theme, rowSpacing }) =>
    rowSpacing && `row-gap: ${theme.spacing(rowSpacing)};`};
  ${({ theme, spacing }) => spacing && `gap: ${setCss(spacing, theme)};`};
  ${({ container, spacing, rowSpacing, columnSpacing }) =>
    (spacing || rowSpacing || container || columnSpacing) && 'display: grid'};
  grid-template-columns: ${({ columns }) => getTemplateStyle(columns)};
  grid-template-rows: ${({ rows }) => getTemplateStyle(rows)};
  ${({ direction }) => direction && `grid-auto-flow: ${direction}`};
`;
