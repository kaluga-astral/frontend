import { PropsWithChildren, forwardRef } from 'react';

import { Grid } from '../../Grid';
import { Product, ProductProps } from '../../Product';
import { Profile } from '../../Profile';
import { ProfileProps } from '../../Profile';

import { HeaderRoot } from './styles';

export type HeaderProps = {
  product: ProductProps;
  productSwitcher?: (props: PropsWithChildren<{}>) => JSX.Element;
  profile?: ProfileProps;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>((props, ref) => {
  const { productSwitcher: ProductSwitcher, product, profile } = props;

  return (
    <HeaderRoot ref={ref}>
      <Grid
        container
        columnSpacing={(theme) => theme.spacing(0.5)}
        autoFlow="column"
        component="nav"
      >
        {ProductSwitcher && <ProductSwitcher />}
        <Product {...product} />
        {/* {Menu && <Menu />} */}
      </Grid>
      {profile && <Profile {...profile} />}
    </HeaderRoot>
  );
});

export default Header;
