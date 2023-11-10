import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import type { MenuOrganizationProps } from '../../MenuOrganization';
import { MenuOrganization } from '../../MenuOrganization';
import type { ProductProps } from '../../Product';
import { Product } from '../../Product';
import { Profile } from '../../Profile';
import type { ProfileProps } from '../../Profile';

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
