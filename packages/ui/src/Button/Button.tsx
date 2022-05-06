import { forwardRef } from 'react';

import { CircularProgress } from '../CircularProgress';

import { StyledLoadingButton } from './styled';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <StyledLoadingButton
        ref={ref}
        {...props}
        loadingIndicator={<CircularProgress size="small" />}
      />
    );
  }
);

export default Button;
