import { GridProps } from './types';
import { StyledGrid } from './styled';

export const Grid = ({
  container = false,
  templateColumns,
  templateRows,
  templateAreas,
  columnSpacing,
  rowSpacing,
  spacing,
  autoColumns,
  autoRows,
  autoFlow,
  column,
  row,
  area,
  children,
  ...props
}: GridProps) => {
  return (
    <StyledGrid
      container={container}
      gridTemplateColumns={templateColumns}
      gridTemplateRows={templateRows}
      gridTemplateAreas={templateAreas}
      columnGap={columnSpacing}
      rowGap={rowSpacing}
      gap={spacing}
      gridAutoColumns={autoColumns}
      gridAutoRows={autoRows}
      gridAutoFlow={autoFlow}
      gridColumn={column}
      gridRow={row}
      gridArea={area}
      {...props}
    >
      {children}
    </StyledGrid>
  );
};
