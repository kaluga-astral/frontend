import { forwardRef } from 'react';

import { CircularProgress } from '../CircularProgress';

import { StyledButton } from './styled';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, startIcon, endIcon, loading, ...restProps } = props;
    return (
      <StyledButton loading={loading} {...restProps} ref={ref}>
        <span>{startIcon}</span>
        {children}
        {loading && <CircularProgress />}
        <span>{endIcon}</span>
      </StyledButton>
    );
  }
);
