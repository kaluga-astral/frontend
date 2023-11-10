import type { ReactNode } from 'react';
import { forwardRef } from 'react';

import type { GridContainerProps, GridElementsProps } from './types';
import { StyledGrid } from './styles';

export type LegacyGridProps = GridContainerProps &
  GridElementsProps & { children?: ReactNode };

/**
 * @description Deprecated
 */
export const LegacyGrid = forwardRef<HTMLElement, LegacyGridProps>(
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
  ) => {
    return (
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
    );
  },
);
