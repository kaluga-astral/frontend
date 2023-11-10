import type { StyledGridProps } from './styles';
import { StyledGrid } from './styles';
import type { GridComponentProps } from './GridComponent';

export type GridProps = GridComponentProps & StyledGridProps;

export const Grid = StyledGrid;
