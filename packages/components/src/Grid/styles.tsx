import { styled } from '../styles';
import { Theme } from '../theme';

import { GridComponent } from './GridComponent';
import { GridProps } from './types';

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
})<GridProps>`
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
