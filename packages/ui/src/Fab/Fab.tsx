import { forwardRef } from 'react';
import { FabProps as MuiFabProps } from '@mui/material/Fab';

import { StyledFab } from './styles';
import { FabColor } from './types';
import { FabVariants } from './enums';

export type FabProps = Omit<MuiFabProps, 'color' | 'variant'> & {
  color?: FabColor;
  variant?: MuiFabProps['variant'] | 'square';
};

export const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({ ref, variant = 'square', ...props }) => {
    return (
      <StyledFab
        {...props}
        variant={variant === FabVariants.SQUARE ? 'circular' : variant}
        isSquare={variant === FabVariants.SQUARE}
        ref={ref}
      />
    );
  },
);
