import { forwardRef } from 'react';

import { Name, Root } from './styled';
import { ProductProps } from './types';

export const Product = forwardRef<HTMLButtonElement, ProductProps>(
  (props, ref) => {
    const { Logo, name } = props;

    return (
      <Root ref={ref} variant="text">
        <Logo />
        <Name>{name}</Name>
      </Root>
    );
  }
);

export default Product;
