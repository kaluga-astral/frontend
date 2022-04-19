import { forwardRef } from 'react';
import { LoadingButton } from '@mui/lab';

import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <LoadingButton ref={ref} {...props} />;
  }
);

export default Button;
