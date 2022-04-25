import { CircularProgressProps as MuiCircularProgressProps } from '@mui/material';

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    primary: true;
    inverted: true;
  }
}

export type CircularProgressProps = Omit<
  MuiCircularProgressProps,
  'color' | 'size'
> & {
  color?: 'primary' | 'inverted';
  size?: 'small' | 'medium';
};
