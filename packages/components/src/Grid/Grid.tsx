import { StyledGrid, type StyledGridProps } from './styles';
import { type GridComponentProps } from './GridComponent';

export type GridProps = GridComponentProps & StyledGridProps;

export const Grid = StyledGrid;
