import { forwardRef } from 'react';

import { CircularProgress } from '../CircularProgress';

import { StyledLoadingButton } from './styled';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = 'contained', ...restProps } = props;

    return (
      <StyledLoadingButton
        ref={ref}
        {...restProps}
        variant={variant}
        loadingIndicator={<CircularProgress size="small" />}
      />
    );
  }
);

export default Button;
