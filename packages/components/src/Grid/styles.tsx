import { styled } from '../styles';
import { Theme } from '../theme';

import { GridComponent } from './GridComponent';
import { GridProps } from './Grid';

/**
 * @description Если аргумент - массив, то возвращаем его, иначе кладем аргумент в массив
 */
const ensureArray = <T = unknown,>(arg: T | T[]): T[] =>
  Array.isArray(arg) ? arg : [arg];

/**
 * @description Проходит по массиву со значениями отступов и превращает в строку
 */
const setCss = (prop: number | [number, number], theme: Theme) =>
  ensureArray(prop)
    .map((value) => theme.spacing(value))
    .join(' ');

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
})<GridProps>`
  ${({ theme, columnSpacing }) =>
    columnSpacing && `column-gap: ${theme.spacing(columnSpacing)};`};
  ${({ theme, rowSpacing }) =>
    rowSpacing && `row-gap: ${theme.spacing(rowSpacing)};`};
  ${({ theme, spacing }) => spacing && `gap: ${setCss(spacing, theme)};`};
  ${({ container, spacing, rowSpacing, columnSpacing }) =>
    (spacing || rowSpacing || container || columnSpacing) && 'display: grid'};
  ${({ columns }) =>
    columns && `grid-template-columns: repeat(${columns}, 1fr)`};
  ${({ rows }) => rows && `grid-template-rows: repeat(${rows}, 1fr)`};
  ${({ direction }) => direction && `grid-auto-flow: ${direction}`};
`;
