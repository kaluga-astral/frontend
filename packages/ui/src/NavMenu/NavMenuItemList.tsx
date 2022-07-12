import { ElementType } from 'react';
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
        active: boolean;
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

        return (
          <li key={key}>
            <NavMenuItemButton
              collapsedIn={collapsedIn}
              selected={value.active}
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
