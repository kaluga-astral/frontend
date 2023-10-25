import { PropsWithChildren, forwardRef } from 'react';

import {
  MenuOrganization,
  MenuOrganizationProps,
} from '../../MenuOrganization';
import { Product, ProductProps } from '../../Product';
import { Profile } from '../../Profile';
import { ProfileProps } from '../../Profile';

import { HeaderNav, HeaderRoot, HeaderSection } from './styles';

export type HeaderProps = {
  product: ProductProps;
  productSwitcher?: (props: PropsWithChildren<{}>) => JSX.Element;
  profile?: ProfileProps;
  menuOrganization?: MenuOrganizationProps | null;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const {
    productSwitcher: ProductSwitcher,
    product,
    profile,
    menuOrganization,
  } = props;

  return (
    <HeaderRoot ref={ref}>
      <HeaderNav>
        <HeaderSection spacing={2} container>
          {ProductSwitcher && <ProductSwitcher />}
          <Product {...product} />
        </HeaderSection>
        <HeaderSection spacing={2} container>
          {menuOrganization && <MenuOrganization {...menuOrganization} />}
          {profile && <Profile {...profile} />}
        </HeaderSection>
      </HeaderNav>
    </HeaderRoot>
  );
});

export default Header;
