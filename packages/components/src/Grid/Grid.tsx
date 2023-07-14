import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { GridPropsBase } from './types';
import { StyledGrid } from './styles';

export type GridProps = GridPropsBase &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Grid = StyledGrid;
