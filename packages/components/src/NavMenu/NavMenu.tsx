import {
  type ComponentProps,
  type ElementType,
  type ForwardedRef,
} from 'react';
import { List } from '@mui/material';

import { forwardRefWithGeneric } from '../forwardRefWithGeneric';

import { Item, type ItemProps } from './Item';

export type NavMenuProps<TComponent extends ElementType = ElementType> = {
  /**
   * Состояние свернуто/развернуто меню по горизонтали
   */
  collapsedIn?: boolean;
  items: [
    key: ItemProps['item'][0],
    value: ItemProps['item'][1] & { component?: TComponent } & Omit<
        ComponentProps<ElementType extends TComponent ? 'button' : TComponent>,
        ''
      >,
  ][];
};

const NavMenuInner = <TComponent extends ElementType>(
  props: NavMenuProps<TComponent>,
  ref: ForwardedRef<HTMLUListElement>,
) => {
  const { collapsedIn = true, items } = props;

  return (
    <List ref={ref} disablePadding>
      {items.map((item) => {
        return <Item key={item[0]} collapsedIn={collapsedIn} item={item} />;
      })}
    </List>
  );
};

export const NavMenu = forwardRefWithGeneric(NavMenuInner);
