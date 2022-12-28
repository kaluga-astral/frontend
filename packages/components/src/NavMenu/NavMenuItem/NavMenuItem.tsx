import {
  ElementType,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { Collapse } from '../../Collapse';

import { NavMenuItemList, NavMenuItemListProps } from './NavMenuItemList';
import { NavMenuItemButton } from './NavMenuItemButton';

export type NavMenuItemProps = {
  collapsedIn: boolean;
  item: [
    key: string,
    value: {
      icon: ReactElement;
      text: string;
      active?: boolean;
      component?: ElementType;
      items?: NavMenuItemListProps['items'];
    },
  ];
};

export const NavMenuItem = (props: NavMenuItemProps) => {
  const {
    collapsedIn,
    item: [key, value],
  } = props;
  const [opened, setOpened] = useState(
    value.items?.some(([, { active }]) => {
      return active;
    }),
  );
  const selected = useMemo(() => {
    return opened ? false : value.active;
  }, [opened, value.active]);

  const handleClick = useCallback(() => {
    setOpened((prevValue) => {
      if (typeof prevValue === 'boolean') {
        return !prevValue;
      }

      return;
    });
  }, []);

  return (
    <li key={key}>
      <NavMenuItemButton
        opened={opened}
        collapsedIn={collapsedIn}
        selected={selected}
        text={value.text}
        icon={value.icon}
        component={value.component}
        onClick={handleClick}
      />
      {value.items && (
        <Collapse in={opened}>
          <NavMenuItemList collapsedIn={collapsedIn} items={value.items} />
        </Collapse>
      )}
    </li>
  );
};
