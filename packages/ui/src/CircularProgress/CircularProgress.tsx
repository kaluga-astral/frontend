import { forwardRef, useMemo } from 'react';
import MuiCircularProgress from '@mui/material/CircularProgress';

import { WithoutEmotionSpecific } from '../types';

import { CircularProgressProps } from './types';

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
