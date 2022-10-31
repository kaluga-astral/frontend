import { forwardRef } from 'react';
import { FabProps as MuiFabProps } from '@mui/material/Fab';

import { WithoutEmotionSpecific } from '../types';

import { StyledFab } from './styles';
import { FabColor } from './types';
import { FabSizes } from './enums';

export type FabProps = Omit<
  WithoutEmotionSpecific<MuiFabProps>,
  'color' | 'variant'
> & {
  color?: FabColor;
  variant?: MuiFabProps['variant'] | 'square';
};

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
