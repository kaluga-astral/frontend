import { forwardRef } from 'react';
import { List } from '@mui/material';

import { NavMenuItem, NavMenuItemProps } from './NavMenuItem';

export type NavMenuProps = {
  /**
   * Состояние свернуто/развернуто меню по горизонтали
   */
  collapsedIn: boolean;
  items: Array<NavMenuItemProps['item']>;
};

export const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(
  (props, ref) => {
    const { collapsedIn, items } = props;

    return (
      <List ref={ref} disablePadding>
        {items.map((item) => {
          return <NavMenuItem collapsedIn={collapsedIn} item={item} />;
        })}
      </List>
    );
  },
);
