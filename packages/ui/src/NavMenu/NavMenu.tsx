import {
  ElementType,
  ReactElement,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { List } from '@mui/material';

import { Collapse } from '../Collapse';

import { NavMenuItemListProps } from './NavMenuItemList';
import { NavMenuItemButton } from './NavMenuItemButton';
import { NavMenuItemList } from './NavMenuItemList';

export type NavMenuProps = {
  /**
   * Состояние свернуто/развернуто меню по горизонтали
   */
  collapsedIn: boolean;
  items: Array<
    [
      key: string,
      value: {
        icon: ReactElement;
        text: string;
        getState: () => 'active' | 'inactive'; // | disabled | etc
        component?: ElementType;
        items?: NavMenuItemListProps['items'];
      }
    ]
  >;
};

export const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(
  (props, ref) => {
    const { collapsedIn, items } = props;

    return (
      <List ref={ref} disablePadding>
        {items.map((item) => {
          const [key, value] = item;
          const [opened, setOpened] = useState(
            value.items?.some(([, { getState }]) => {
              const state = getState();

              return state === 'active';
            }) ?? false
          );
          const selected = useMemo(() => {
            return opened ? false : value.getState() === 'active';
          }, [opened, value.getState]);

          const handleNavMenuItemButtonClick = useCallback(() => {
            setOpened((prevValue) => !prevValue);
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
                onClick={handleNavMenuItemButtonClick}
              />
              {value.items && (
                <Collapse in={opened}>
                  <NavMenuItemList
                    collapsedIn={collapsedIn}
                    items={value.items}
                  />
                </Collapse>
              )}
            </li>
          );
        })}
      </List>
    );
  }
);
