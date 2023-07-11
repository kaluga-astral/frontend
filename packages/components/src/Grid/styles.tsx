import { styled } from '../styles';

import { GridComponent } from './GridComponent';
import { GridProps } from './Grid';

const ensureArray = <T = unknown,>(arg: T | T[]): T[] =>
  Array.isArray(arg) ? arg : [arg];

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
  ${({ theme, spacing }) =>
    spacing &&
    `gap: ${ensureArray(spacing)
      .map((value) => theme.spacing(value))
      .join(' ')};`};
  ${({ container, spacing, rowSpacing, columnSpacing }) =>
    (spacing || rowSpacing || container || columnSpacing) && 'display: grid'};
  ${({ columns }) =>
    columns && `grid-template-columns: repeat(${columns}, 1fr)`};
  ${({ rows }) => rows && `grid-template-rows: repeat(${rows}, 1fr)`};
  ${({ direction }) => direction && `grid-auto-flow: ${direction}`};
`;
