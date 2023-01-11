import { ReactNode, forwardRef } from 'react';

import { NavMenu, NavMenuProps } from '../../NavMenu';
import { useLocalStorage } from '../../hooks';

import { SidebarProvider } from './SidebarProvider';
import { SidebarRoot } from './styles';
import { SidebarNav } from './SidebarNav';
import { SidebarToggler } from './SidebarToggler';

export type SidebarProps = {
  /**
   * Кнопка главного действия в сайдбаре
   */
  header?: ReactNode;
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
    const {
      menu,
      localStorageKey = '@astral/ui::Sidebar::collapsedIn',
      header,
    } = props;
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
      <SidebarProvider collapsedIn={collapsedIn}>
        <SidebarRoot ref={ref} collapsedIn={collapsedIn}>
          {header}
          <SidebarNav
            menu={<NavMenu collapsedIn={collapsedIn} items={menu.items} />}
          />
          <SidebarToggler
            collapsedIn={collapsedIn}
            onToggle={handleTogglerChange}
          />
        </SidebarRoot>
      </SidebarProvider>
    );
  },
);
