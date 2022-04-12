import { forwardRef } from 'react';
// import { List, ListItem } from '@mui/material';

import { Switcher } from './Switcher';
import { Product } from './Product';
import { Root } from './styled';
import { NavProps } from './types';

export const Nav = forwardRef<HTMLDivElement, NavProps>((props, ref) => {
  const { product } = props;

  return (
    <Root ref={ref}>
      <Switcher />
      <Product {...product} />
      {/* <List dense disablePadding>
        <ListItem button>Главная</ListItem>
        <ListItem button>Чеки</ListItem>
      </List> */}
    </Root>
  );
});

export default Nav;
