import { forwardRef } from 'react';

import { Name, Root } from './styled';
import { ProductProps } from './types';

export const Product = forwardRef<HTMLButtonElement, ProductProps>(
  (props, ref) => {
    const { logo: Logo, name, ...restProps } = props;

    return (
      <Root ref={ref} variant="text" {...restProps}>
        <Logo />
        <Name>{name}</Name>
      </Root>
    );
  }
);

export default Product;
