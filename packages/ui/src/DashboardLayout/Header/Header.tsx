import { forwardRef } from 'react';

// import { MenuListProps } from '../../MenuList';
import { Product, ProductProps } from '../../Product';
import { Profile } from '../../Profile';
import { ProfileProps } from '../../Profile/types';

import { HeaderNav, HeaderRoot } from './styled';

export type HeaderProps = {
  product: ProductProps;
  productSwitcher?: React.FC;
  // menu?: React.FC<MenuListProps>;
  profile: ProfileProps;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const {
    productSwitcher: ProductSwitcher,
    product,
    // menu: Menu,
    profile,
  } = props;

  return (
    <HeaderRoot ref={ref}>
      <HeaderNav>
        {ProductSwitcher && <ProductSwitcher />}
        <Product {...product} />
        {/* {Menu && <Menu />} */}
      </HeaderNav>
      <Profile {...profile} />
    </HeaderRoot>
  );
});

export default Header;
