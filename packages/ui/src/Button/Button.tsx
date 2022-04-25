import { forwardRef } from 'react';
import { LoadingButton } from '@mui/lab';

import { CircularProgress } from '../CircularProgress';

import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <LoadingButton
        ref={ref}
        {...props}
        loadingIndicator={<CircularProgress size="small" />}
      />
    );
  }
);

export default Button;
