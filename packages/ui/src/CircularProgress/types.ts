import { CircularProgressProps as MuiCircularProgressProps } from '@mui/material';

import { CircularProgressColors, CircularProgressSizes } from './constants';

export type CircularProgressColor = `${CircularProgressColors}`;

export type CircularProgressSize = `${CircularProgressSizes}`;

export type CircularProgressProps = Omit<MuiCircularProgressProps, 'color'> & {
  color?: CircularProgressColor;
};
