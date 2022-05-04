import { forwardRef } from 'react';
import { LoadingButton } from '@mui/lab';

import { CircularProgress } from '../CircularProgress';
import { ButtonVariants } from '../ButtonBase/constants';

import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = ButtonVariants.CONTAINED, ...restProps } = props;

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
