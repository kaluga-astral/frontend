import { type ReactNode, forwardRef, useContext } from 'react';

import { useViewportType } from '../../hooks';
import { NavMenu, type NavMenuProps } from '../../NavMenu';
import { DashboardSidebarContext } from '../../DashboardSidebarProvider';
import { SidebarToggler } from '../SidebarToggler';

import { SidebarHeader, SidebarRoot } from './styles';
import { SidebarNav } from './SidebarNav';

export type SidebarProps = {
  /**
   * Пропс для передачи контента в заголовок сайдбара
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
    const { menu, header } = props;

    const { collapsedIn, handleTogglerChange } = useContext(
      DashboardSidebarContext,
    );

    const { isMobile } = useViewportType();

    return (
      <SidebarRoot ref={ref} collapsedIn={collapsedIn}>
        <SidebarHeader>{header}</SidebarHeader>

        <SidebarNav
          menu={<NavMenu collapsedIn={collapsedIn} items={menu.items} />}
        />

        {!isMobile && (
          <SidebarToggler
            collapsedIn={collapsedIn}
            onToggle={handleTogglerChange}
          />
        )}
      </SidebarRoot>
    );
  },
);
