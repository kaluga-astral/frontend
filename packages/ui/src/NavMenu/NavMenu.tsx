import { ReactElement, forwardRef, useMemo } from 'react';
import { List } from '@mui/material';

import { Collapse } from '../Collapse';

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
        selected: boolean;
        icon: ReactElement;
        text: string;
        items?: Array<
          [
            key: string,
            value: {
              selected: boolean;
              text: string;
            }
          ]
        >;
      }
    ]
  >;
};

export const NavMenu = forwardRef<HTMLUListElement, NavMenuProps>(
  (props, ref) => {
    const { collapsedIn, items } = props;

    return (
      <List ref={ref} disablePadding>
        {items.map(([key, value]) => {
          const opened = useMemo(() => {
            return value.items?.some(([, { selected }]) => selected) ?? false;
          }, [value.items]);
          const selected = useMemo(() => {
            return opened ? false : value.selected;
          }, [opened, value.selected]);

          return (
            <li key={key}>
              <NavMenuItemButton
                collapsedIn={collapsedIn}
                selected={selected}
                text={value.text}
                icon={value.icon}
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
