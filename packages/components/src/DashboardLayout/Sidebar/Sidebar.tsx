import { forwardRef } from 'react';

import { NavMenu, NavMenuProps } from '../../NavMenu';
import { useLocalStorage } from '../../hooks';

import { SidebarRoot } from './styles';
import { SidebarNav } from './SidebarNav';
import { SidebarToggler } from './SidebarToggler';

export type SidebarProps = {
  /**
   * Ключ по которому осуществляется персист состояния collapsedIn в localStorage
   */
  localStorageKey?: string;
  /**
   * Описание меню
   */
  menu: {
    /**
     * Пункты меню
     */
    items: NavMenuProps['items'];
  };
};

export const Sidebar = forwardRef<HTMLBaseElement, SidebarProps>(
  (props, ref) => {
    const { menu, localStorageKey = '@astral/ui::Sidebar::collapsedIn' } =
      props;
    const [collapsedIn = true, setCollapsedIn] = useLocalStorage(
      localStorageKey,
      true,
    );

    const handleTogglerChange = () => {
      setCollapsedIn(() => {
        return !collapsedIn;
      });
    };

    return (
      <SidebarRoot ref={ref} collapsedIn={collapsedIn}>
        <SidebarNav
          menu={<NavMenu collapsedIn={collapsedIn} items={menu.items} />}
        />
        <SidebarToggler
          collapsedIn={collapsedIn}
          onToggle={handleTogglerChange}
        />
      </SidebarRoot>
    );
  },
);
