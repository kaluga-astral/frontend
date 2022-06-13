import { List } from '@mui/material';
import { PageDotOutlineMd } from '@astral/icons';

import { NavMenuItemButton } from './NavMenuItemButton/NavMenuItemButton';

export type NavMenuItemListProps = {
  collapsedIn: boolean;
  items: Array<
    [
      key: string,
      value: {
        selected: boolean;
        text: string;
      }
    ]
  >;
};

export const NavMenuItemList = (props: NavMenuItemListProps) => {
  const { collapsedIn, items } = props;

  return (
    <List disablePadding>
      {items.map(([key, value]) => {
        return (
          <NavMenuItemButton
            key={key}
            collapsedIn={collapsedIn}
            selected={value.selected}
            text={value.text}
            icon={<PageDotOutlineMd />}
          />
        );
      })}
    </List>
  );
};
