import { forwardRef } from 'react';

import { StyledButton } from './styles';
import { type ProductProps } from './types';

export const Product = forwardRef<HTMLButtonElement, ProductProps>(
  (props, ref) => {
    const { logo: Logo, name, variant = 'text', ...restProps } = props;

    return (
      <StyledButton
        ref={ref}
        {...restProps}
        variant={variant}
        startIcon={<Logo />}
      >
        {name}
      </StyledButton>
    );
  },
);

export default Product;
