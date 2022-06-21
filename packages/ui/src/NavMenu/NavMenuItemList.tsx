import { ElementType, useMemo } from 'react';
import { List } from '@mui/material';
import { PageDotOutlineMd } from '@astral/icons';

import { NavMenuItemButton } from './NavMenuItemButton/NavMenuItemButton';

export type NavMenuItemListProps = {
  collapsedIn: boolean;
  items: Array<
    [
      key: string,
      value: {
        text: string;
        getState: () => 'active' | 'inactive';
        component: ElementType;
      }
    ]
  >;
};

export const NavMenuItemList = (props: NavMenuItemListProps) => {
  const { collapsedIn, items } = props;

  return (
    <List disablePadding>
      {items.map((item) => {
        const [key, value] = item;
        const selected = useMemo(() => {
          return value.getState() === 'active';
        }, [value.getState]);

        return (
          <li key={key}>
            <NavMenuItemButton
              collapsedIn={collapsedIn}
              selected={selected}
              text={value.text}
              icon={<PageDotOutlineMd />}
              component={value.component}
            />
          </li>
        );
      })}
    </List>
  );
};
