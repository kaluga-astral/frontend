import { forwardRef } from 'react';
import { LoadingButton } from '@mui/lab';

import { CircularProgress } from '../CircularProgress';

import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = 'contained', ...restProps } = props;

    return (
      <LoadingButton
        ref={ref}
        {...restProps}
        variant={variant}
        loadingIndicator={<CircularProgress size="small" />}
      />
    );
  }
);

export default Button;
