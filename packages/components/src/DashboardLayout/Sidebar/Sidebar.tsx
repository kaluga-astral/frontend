import { ReactNode, forwardRef, useEffect, useState } from 'react';

import { NavMenu, NavMenuProps } from '../../NavMenu';
import { useLocalStorage } from '../../hooks';

import { SidebarProvider } from './SidebarProvider';
import { SidebarRoot } from './styles';
import { SidebarNav } from './SidebarNav';
import { SidebarToggler } from './SidebarToggler';

export type SidebarProps = {
  /**
   * Пропс длея передачи контента в заголовок сайдбара
   * @example <Sidebar header={<SidebarButton />>} >
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

    const [collapsedIn, seCollapsedIn] = useState(true);
    const [collapsedIn = true, setCollapsedIn] = useLocalStorage(
      localStorageKey,
      true,
    );

    /**
     * Присваивается значение из localStorage внутреннему флагу после монтирования компонента
     * Это необходимо, чтобы предотвратить возникновение ошибки гидратации в nextjs
     * Если пользователь свернул сайдбар, то после перезагрузки сраницы, он увидит плавное схлопывание сайдбара.
     * При этом next не будет выдавать ошибку о несоответствии стилей
     */
    useEffect(() => {
      setKey(collapsedIn);
    }, [collapsedIn]);

    const handleTogglerChange = () => {
      setCollapsedIn(() => {
        return !collapsedIn;
      });
    };

    return (
      <SidebarProvider isOpen={collapsedIn}>
        <SidebarRoot ref={ref} collapsedIn={key}>
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
