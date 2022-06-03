import { forwardRef } from 'react';

import { Button } from '../Button';

import { ProductProps } from './types';

export const Product = forwardRef<HTMLButtonElement, ProductProps>(
  (props, ref) => {
    const { logo: Logo, name, variant = 'text', ...restProps } = props;

    return (
      <Button ref={ref} {...restProps} variant={variant} startIcon={<Logo />}>
        {name}
      </Button>
    );
  },
);

export default Product;
