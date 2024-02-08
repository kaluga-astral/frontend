import { type ReactNode, createContext, useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import { useViewportType } from '../hooks/useViewportType';
import { useLocalStorage } from '../hooks';

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

  const [collapsedIn, setCollapsedIn] = useState(!isMobile);
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

    if (!isMobile) {
      checkScreenWidth();
    }
  }, [matches, storageCollapsedIn, isMobile]);

  const onToggleSidebar = () => {
    if (matches) {
      return setStorageCollapsedIn(!storageCollapsedIn);
    }

    setCollapsedIn(!collapsedIn);
  };

  return (
    <DashboardSidebarContext.Provider value={{ collapsedIn, onToggleSidebar }}>
      {children}
    </DashboardSidebarContext.Provider>
  );
};
