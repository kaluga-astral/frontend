import { type ReactNode, createContext } from 'react';

import { useViewportType } from '../hooks/useViewportType';

import { useDesktopSidebar, useMobileSidebar } from './hooks';

export type DashboardSidebarContextProps = {
  /*
   * Флаг, отвечающий за состояние компонента
   */
  collapsedIn: boolean;
  /*
   * Обработчик, позволяющий изменить состояние боковой панели
   */
  onToggleSidebar: () => void;
};

export type DashboardSidebarProviderProps = {
  children: ReactNode;
  /*
   * Название ключа в localStorage
   */
  localStorageKey?: string;
};

export const DashboardSidebarContext =
  createContext<DashboardSidebarContextProps>({
    collapsedIn: false,
    onToggleSidebar: () => {},
  });

/**
 * Провайдер предназначен для проброса состояния боковой панел, а так же управления этим состоянием.
 * В данный провайдер обернут компонент DashboardLayout.
 */
export const DashboardSidebarProvider = ({
  children,
  localStorageKey = '@astral/ui::Sidebar::collapsedIn',
}: DashboardSidebarProviderProps) => {
  const { isMobile } = useViewportType();

  const useSidebar = isMobile ? useMobileSidebar : useDesktopSidebar;
  const providerValues = useSidebar(localStorageKey);

  return (
    <DashboardSidebarContext.Provider value={providerValues}>
      {children}
    </DashboardSidebarContext.Provider>
  );
};
