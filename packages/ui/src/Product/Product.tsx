import { forwardRef } from 'react';

import { ProductButton } from './styles';
import { ProductProps } from './types';

export const Product = forwardRef<HTMLButtonElement, ProductProps>(
  (props, ref) => {
    const { logo: Logo, name, variant = 'text', ...restProps } = props;

    return (
      <ProductButton
        ref={ref}
        {...restProps}
        variant={variant}
        startIcon={<Logo />}
      >
        {name}
      </ProductButton>
    );
  },
);

export default Product;
