import { forwardRef } from 'react';

import { Name, Root } from './styled';
import { ProductProps } from './types';

export const Product = forwardRef<HTMLButtonElement, ProductProps>(
  (props, ref) => {
    const { logo: Logo, name, variant = 'text', ...restProps } = props;

    return (
      <Root ref={ref} {...restProps} variant={variant}>
        <Logo />
        <Name>{name}</Name>
      </Root>
    );
  }
);

export default Product;
