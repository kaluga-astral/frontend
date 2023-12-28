import { type PropsWithChildren, type ReactNode, forwardRef } from 'react';

import {
  MenuOrganization,
  type MenuOrganizationProps,
} from '../../MenuOrganization';
import { Product, type ProductProps } from '../../Product';
import { Profile } from '../../Profile';
import { type ProfileProps } from '../../Profile';

import { HeaderRoot, HeaderSection } from './styles';

export type HeaderProps = {
  product: ProductProps;
  productSwitcher?: (props: PropsWithChildren<{}>) => JSX.Element;
  profile?: ProfileProps;
  organizationMenu?: MenuOrganizationProps;
  children?: ReactNode;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const {
    productSwitcher: ProductSwitcher,
    product,
    profile,
    organizationMenu,
    children,
  } = props;

  return (
    <HeaderRoot ref={ref}>
      <HeaderSection>
        {ProductSwitcher && <ProductSwitcher />}
        <Product {...product} />
      </HeaderSection>
      {children}
      <HeaderSection>
        {organizationMenu && <MenuOrganization {...organizationMenu} />}
        {profile && <Profile {...profile} />}
      </HeaderSection>
    </HeaderRoot>
  );
});

export default Header;
