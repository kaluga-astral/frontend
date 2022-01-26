import { CircularProgressProps as MuiCircularProgressProps } from '@mui/material';

import { СircularProgressColors, СircularProgressSizes } from './constants';

export type СircularProgressColor = `${СircularProgressColors}`;

export type СircularProgressSize = `${СircularProgressSizes}`;

export type СircularProgressProps = Omit<
  MuiCircularProgressProps,
  'color' | 'size'
> & {
  color?: СircularProgressColor;
  size?: СircularProgressSize;
};
