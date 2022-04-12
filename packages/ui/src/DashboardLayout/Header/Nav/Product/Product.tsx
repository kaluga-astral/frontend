import { forwardRef } from 'react';

import { Name, Root } from './styled';
import { ProductProps } from './types';

export const Product = forwardRef<HTMLDivElement, ProductProps>((props) => {
  const { Logo, name } = props;

  // TODO ref={ref}
  return (
    <Root variant="text">
      {Logo}
      <Name>{name}</Name>
    </Root>
  );
});

export default Product;
