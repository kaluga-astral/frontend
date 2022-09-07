import { FabProps as MuiFabProps } from '@mui/material';

import { FabColors, FabVariants } from './constants';

export type FabColor = `${FabColors}`;

export type FabVariant = `${FabVariants}`;

export type FabProps = Omit<MuiFabProps, 'variant' | 'color'> & {
  color?: FabColor;
  variant?: MuiFabProps['variant'] & FabVariant;
};
