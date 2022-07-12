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
        active?: boolean;
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
            value.items?.some(([, { active }]) => {
              return active;
            })
          );
          const selected = useMemo(() => {
            return opened ? false : value.active;
          }, [opened, value.active]);

          const handleNavMenuItemButtonClick = useCallback(() => {
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
