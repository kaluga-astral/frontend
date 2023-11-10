import type { ReactNode } from 'react';
import { forwardRef, useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import type { NavMenuProps } from '../../NavMenu';
import { NavMenu } from '../../NavMenu';
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

    const [collapsedIn, setCollapsedIn] = useState(true);
    const [storageCollapsedIn = true, setStorageCollapsedIn] = useLocalStorage(
      localStorageKey,
      true,
    );

    /**
     * Присваивается значение из localStorage внутреннему флагу после монтирования компонента
     * Это необходимо, чтобы предотвратить возникновение ошибки гидратации в nextjs
     * Если пользователь свернул сайдбар, то после перезагрузки сраницы, он увидит плавное схлопывание сайдбара.
     * При этом next не будет выдавать ошибку о несоответствии стилей
     */

    /**
    Имплементирована следующая логика работы комопнента:
    - при нажатии на тогглер и размере window >= xl значение записывается в localStorage
    - при нажатии на тогглер и размере window < xl значение в localStorage не меняется
    - при изменении размера window панель будет открываться/закрываться с помощью useMediaQuery()
        
       Это должно улучшить UX, так как на небольших экранах панель занимает достаточно много места и 
     лучше, если она будет открываться только при необходимости
     */

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up('xl'));

    useEffect(() => {
      const checkScreenWidth = () => {
        if (!matches) {
          setCollapsedIn(false);
        } else {
          setCollapsedIn(storageCollapsedIn);
        }
      };

      checkScreenWidth();
    }, [matches, storageCollapsedIn]);

    const handleTogglerChange = () => {
      if (matches) {
        setStorageCollapsedIn(!storageCollapsedIn);
      } else {
        setCollapsedIn(!collapsedIn);
      }
    };

    return (
      <SidebarProvider isOpen={collapsedIn}>
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
