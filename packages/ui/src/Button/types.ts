import { LoadingButtonProps } from '@mui/lab';

export type ButtonProps = Omit<LoadingButtonProps, 'variant' | 'color'> & {
  variant?: 'contained' | 'light' | 'text' | 'link';
  color?: 'primary' | 'success' | 'warning' | 'error';
};
