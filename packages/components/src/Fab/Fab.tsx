import { forwardRef } from 'react';

import { StyledFab } from './styles';
import { FabProps } from './types';
import { FabSizes } from './enums';

export const Fab = forwardRef<HTMLButtonElement, FabProps>(
  (
    { variant = 'square', size = FabSizes.Large, color = 'primary', ...props },
    ref,
  ) => {
    return (
      <StyledFab
        {...props}
        variant={variant === 'square' ? 'circular' : variant}
        isSquare={variant === 'square'}
        size={size}
        color={color}
        ref={ref}
      />
    );
  },
);
