import { forwardRef, useMemo } from 'react';
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

export type CircularProgressProps = Omit<
  MuiCircularProgressProps,
  'color' | 'size'
> & {
  /**
   * Цвет лоадера
   */
  color?: 'primary' | 'inverted';
  /**
   * Размер лоадера
   */
  size?: 'small' | 'medium';
};

export const CircularProgress = forwardRef<
  HTMLElement,
  WithoutEmotionSpecific<CircularProgressProps>
>((props, ref) => {
  const { size: sizeProp, color, ...restProps } = props;
  const size = useMemo(() => {
    return sizeProp === 'small' ? 16 : 24;
  }, [sizeProp]);

  return (
    <MuiCircularProgress
      ref={ref}
      {...restProps}
      size={size}
      color="inherit"
      data-color={color}
    />
  );
});

export default CircularProgress;
