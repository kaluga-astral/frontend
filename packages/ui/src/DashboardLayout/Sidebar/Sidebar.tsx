import { forwardRef, useCallback, useState } from 'react';

import { NavMenu, NavMenuProps } from '../../NavMenu';
import { useLocalStorage } from '../../hooks';

import { SidebarRoot } from './styled';
import { SidebarNav } from './SidebarNav';
import { SidebarToggler } from './SidebarToggler';

export type SidebarProps = {
  localStorageKey?: string;
  menu: {
    items: NavMenuProps['items'];
  };
};

export const Sidebar = forwardRef<HTMLBaseElement, SidebarProps>(
  (props, ref) => {
    const { menu, localStorageKey = '@astral/ui::Sidebar::collapsedIn' } =
      props;
    const [savedCollapsedIn, setSavedCollapsedIn] = useLocalStorage(
      localStorageKey,
      true
    );
    const [collapsedIn, setCollapsedIn] = useState(savedCollapsedIn ?? true);

    const handleTogglerChange = useCallback(() => {
      setCollapsedIn((prevValue) => !prevValue);
      setSavedCollapsedIn((prevValue) => !prevValue);
    }, []);

    return (
      <SidebarRoot ref={ref} collapsedIn={collapsedIn}>
        <SidebarNav
          menu={<NavMenu collapsedIn={collapsedIn} items={menu.items} />}
        />
        <SidebarToggler
          collapsedIn={collapsedIn}
          onChange={handleTogglerChange}
        />
      </SidebarRoot>
    );
  }
);
