import { StyledGrid, StyledGridProps } from './styles';
import { GridComponentProps } from './GridComponent';

export type GridProps = GridComponentProps & StyledGridProps;

export const Grid = StyledGrid;
