import { type ReactNode, forwardRef, useContext } from 'react';

import { useViewportType } from '../../hooks/useViewportType';
import { NavMenu, type NavMenuProps } from '../../NavMenu';
import { DashboardSidebarContext } from '../../DashboardSidebarProvider';
import { SidebarToggler } from '../SidebarToggler';

import { SidebarHeader, SidebarRoot } from './styles';
import { SidebarNav } from './SidebarNav';

export type SidebarProps = {
  /**
   * Название класса, применяется к корневому компоненту
   */
  className?: string;

  /**
   * Пропс для передачи контента в заголовок сайдбара
   * @example <Sidebar header={<SidebarButton />>} >
   */
  header?: ReactNode;
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
    const { className, menu, header } = props;

    const { collapsedIn, onToggleSidebar } = useContext(
      DashboardSidebarContext,
    );

    const { isMobile } = useViewportType();

    return (
      <SidebarRoot
        ref={ref}
        collapsedIn={collapsedIn}
        className={className}
        {...{ inert: isMobile && !collapsedIn ? '' : undefined }}
      >
        <SidebarHeader>{header}</SidebarHeader>

        <SidebarNav
          menu={<NavMenu collapsedIn={collapsedIn} items={menu.items} />}
        />

        {!isMobile && (
          <SidebarToggler
            collapsedIn={collapsedIn}
            onToggle={onToggleSidebar}
          />
        )}
      </SidebarRoot>
    );
  },
);
