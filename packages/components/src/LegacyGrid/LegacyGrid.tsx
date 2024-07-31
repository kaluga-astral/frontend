import { type ReactNode, forwardRef } from 'react';

import { type GridContainerProps, type GridElementsProps } from './types';
import { StyledGrid } from './styles';

export type LegacyGridProps = GridContainerProps &
  GridElementsProps & { children?: ReactNode };

/**
 * @deprecated
 * Используйте Grid. Причина отказа от поддержки: нарушение правила использования css prop в рендере компонента
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
