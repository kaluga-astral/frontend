import { forwardRef } from 'react';
import { FabProps as MuiFabProps } from '@mui/material/Fab';

import { StyledFab } from './styles';
import { CustomFabVariant, FabColor } from './types';
import { CustomFabVariants, FabSizes } from './enums';

export type FabProps = Omit<MuiFabProps, 'color' | 'variant'> & {
  color?: FabColor;
  variant?: MuiFabProps['variant'] | CustomFabVariant;
};

export const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({
    ref,
    variant = CustomFabVariants.SQUARE,
    size = FabSizes.LARGE,
    ...props
  }) => {
    return (
      <StyledFab
        {...props}
        variant={variant === CustomFabVariants.SQUARE ? 'circular' : variant}
        isSquare={variant === CustomFabVariants.SQUARE}
        size={size}
        ref={ref}
      />
    );
  },
);
