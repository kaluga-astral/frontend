import { forwardRef } from 'react';
import { List } from '@mui/material';

import { Item, type ItemProps } from './Item';

export type NavMenuProps = {
  /**
   * Состояние свернуто/развернуто меню по горизонтали
   */
  collapsedIn?: boolean;
  items: Array<ItemProps['item']>;
};

export const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(
  (props, ref) => {
    const { collapsedIn = true, items } = props;

    return (
      <List ref={ref} disablePadding>
        {items.map((item) => {
          return <Item key={item[0]} collapsedIn={collapsedIn} item={item} />;
        })}
      </List>
    );
  },
);
