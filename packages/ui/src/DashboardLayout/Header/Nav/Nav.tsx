import { forwardRef } from 'react';

import { Switcher } from './Switcher';
import { Product } from './Product';
import { Root } from './styled';
import { NavProps } from './types';

export const Nav = forwardRef<HTMLDivElement, NavProps>((props, ref) => {
  const { product, MenuList } = props;

  return (
    <Root ref={ref}>
      <Switcher />
      <Product {...product} />
      {MenuList && <MenuList />}
    </Root>
  );
});

export default Nav;
