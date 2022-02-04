import { CircularProgressProps as MuiCircularProgressProps } from '@mui/material';

import { CircularProgressColors } from './constants';

export type CircularProgressColor = `${CircularProgressColors}`;

export type CircularProgressProps = Omit<MuiCircularProgressProps, 'color'> & {
  color?: CircularProgressColor;
};
