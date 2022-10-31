import { PropsWithChildren, forwardRef } from 'react';

import { Product, ProductProps } from '../../Product';
import { Profile } from '../../Profile';
import { ProfileProps } from '../../Profile';

import { HeaderNav, HeaderRoot } from './styles';

export type HeaderProps = {
  product: ProductProps;
  productSwitcher?: (props: PropsWithChildren<{}>) => JSX.Element;
  profile?: ProfileProps;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { productSwitcher: ProductSwitcher, product, profile } = props;

  return (
    <HeaderRoot ref={ref}>
      <HeaderNav>
        {ProductSwitcher && <ProductSwitcher />}
        <Product {...product} />
        {/* {Menu && <Menu />} */}
      </HeaderNav>
      {profile && <Profile {...profile} />}
    </HeaderRoot>
  );
});

export default Header;
