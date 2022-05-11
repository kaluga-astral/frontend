import { forwardRef } from 'react';

import { Product, ProductProps } from '../../../Product';
import { MenuListProps } from '../../../MenuList';

import { HeaderNavRoot } from './styled';

export type HeaderNavProps = {
  product: ProductProps;
  switcher?: React.FC;
  menu?: React.FC<MenuListProps>;
};

export const HeaderNav = forwardRef<HTMLDivElement, HeaderNavProps>(
  (props, ref) => {
    const { product, switcher: Switcher, menu: Menu } = props;

    return (
      <HeaderNavRoot ref={ref}>
        {Switcher && <Switcher />}
        <Product {...product} />
        {Menu && <Menu />}
      </HeaderNavRoot>
    );
  }
);

export default HeaderNav;
