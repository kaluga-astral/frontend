import { FabProps as MuiFabProps } from '@mui/material/Fab/Fab';

import { WithoutEmotionSpecific } from '../types';

import { FabColors } from './enums';

export type FabColor = `${FabColors}`;

export type FabProps = Omit<
  WithoutEmotionSpecific<MuiFabProps>,
  'color' | 'variant'
> & {
  color?: FabColor;
  variant?: 'circular' | 'square';
};
