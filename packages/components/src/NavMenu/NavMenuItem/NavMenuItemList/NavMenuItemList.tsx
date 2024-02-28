import { type ElementType } from 'react';
import { List } from '@mui/material';
import { PageDotOutlineMd } from '@astral/icons';

import { NavMenuItemButton } from '../NavMenuItemButton';

export type NavMenuItemListProps = {
  collapsedIn: boolean;
  items: Array<
    [
      key: string,
      value: {
        text: string;
        active: boolean;
        component: ElementType;
      },
    ]
  >;
  onClickNavItem: ({ isGroupListItem }: { isGroupListItem?: boolean }) => void;
};

export const NavMenuItemList = (props: NavMenuItemListProps) => {
  const { collapsedIn, items, onClickNavItem } = props;

  return (
    <List disablePadding>
      {items.map((item) => {
        const [key, value] = item;

        return (
          <li
            key={key}
            onClick={(e) => {
              e.stopPropagation();
              onClickNavItem({ isGroupListItem: false });
            }}
          >
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
