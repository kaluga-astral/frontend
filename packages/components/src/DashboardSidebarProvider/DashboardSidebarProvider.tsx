import { type ReactNode, createContext, useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import { useLocalStorage } from '../hooks';

export type DashboardSidebarContextProps = {
  collapsedIn: boolean;
  onTogglerChange: () => void;
};

export type DashboardSidebarProviderProps =
  Partial<DashboardSidebarContextProps> & {
    children: ReactNode;
    localStorageKey?: string;
  };

export const DashboardSidebarContext =
  createContext<DashboardSidebarContextProps>({
    collapsedIn: false,
    onTogglerChange: () => {},
  });

/**
 * Провайдер предназначен для проброса состояния боковой панел, а так же управления этим состоянием.
 * В данный провайдер обернут компонент DashboardLayout.
 *
 * @param {string} localStorageKey название ключа в localStorage
 */
export const DashboardSidebarProvider = ({
  children,
  localStorageKey = '@astral/ui::Sidebar::collapsedIn',
}: DashboardSidebarProviderProps) => {
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

  const onTogglerChange = () => {
    if (matches) {
      return setStorageCollapsedIn(!storageCollapsedIn);
    }

    setCollapsedIn(!collapsedIn);
  };

  return (
    <DashboardSidebarContext.Provider value={{ collapsedIn, onTogglerChange }}>
      {children}
    </DashboardSidebarContext.Provider>
  );
};
