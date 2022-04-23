import { forwardRef } from 'react';

import { BaseButtonProps } from '../ButtonBase';

import { StyledIconButton } from './styled';

export const IconButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const { children, ...restProps } = props;
    return (
      <StyledIconButton {...restProps} ref={ref}>
        {children}
      </StyledIconButton>
    );
  }
);
