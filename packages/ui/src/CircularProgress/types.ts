import { CircularProgressProps as MuiCircularProgressProps } from '@mui/material';
import { LoaderColors, LoaderSizes } from './constants';

export type LoaderColor = `${LoaderColors}`;

export type LoaderSize = `${LoaderSizes}`;

export type LoaderProps = Omit<MuiCircularProgressProps, 'color' | 'size'> & {
  color?: LoaderColor;
  size?: LoaderSize;
};
