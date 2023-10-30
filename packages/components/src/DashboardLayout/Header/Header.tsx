import { PropsWithChildren, forwardRef } from 'react';

import {
  MenuOrganization,
  MenuOrganizationProps,
} from '../../MenuOrganization';
import { Product, ProductProps } from '../../Product';
import { Profile } from '../../Profile';
import { ProfileProps } from '../../Profile';

import { HeaderRoot, HeaderSection } from './styles';

export type HeaderProps = {
  product: ProductProps;
  productSwitcher?: (props: PropsWithChildren<{}>) => JSX.Element;
  profile?: ProfileProps;
  organizationMenu?: MenuOrganizationProps;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const {
    productSwitcher: ProductSwitcher,
    product,
    profile,
    organizationMenu,
  } = props;

  return (
    <HeaderRoot ref={ref}>
      <HeaderSection>
        {ProductSwitcher && <ProductSwitcher />}
        <Product {...product} />
      </HeaderSection>
      <HeaderSection>
        {organizationMenu && <MenuOrganization {...organizationMenu} />}
        {profile && <Profile {...profile} />}
      </HeaderSection>
    </HeaderRoot>
  );
});

export default Header;
