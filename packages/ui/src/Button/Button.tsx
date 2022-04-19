import { forwardRef } from 'react';
import { LoadingButton } from '@mui/lab';

import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { ...restProps } = props;

    return <LoadingButton ref={ref} {...restProps} />;
  }
);

export default Button;
