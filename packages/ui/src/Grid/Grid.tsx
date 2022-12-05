import { forwardRef } from 'react';

import { GridProps } from './types';
import { StyledGrid } from './styled';

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
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
      component = 'div',
      children,
      ...props
    },
    ref,
  ) => (
    <StyledGrid
      ref={ref}
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
      component={component}
      {...props}
    >
      {children}
    </StyledGrid>
  ),
);
