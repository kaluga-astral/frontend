import { useEffect, useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

import { useViewportType } from '../../../hooks/useViewportType';
import { useLocalStorage } from '../../../hooks';

type ReturnedSidebarHook<T extends object = object> = {
  collapsedIn: boolean;
  onToggleSidebar: () => void;
  onClickNavItem: (params: T) => void;
};

type UseMobileSidebarHook = () => ReturnedSidebarHook<{
  isGroupListItem?: boolean;
}>;

const useMobileSidebar: UseMobileSidebarHook = () => {
  const [collapsedIn, setCollapsedIn] = useState(false);

  const onToggleSidebar = () => {
    setCollapsedIn((currentState) => !currentState);
  };

  const onClickNavItem = ({
    isGroupListItem,
  }: {
    isGroupListItem?: boolean;
  }) => {
    if (isGroupListItem === undefined || isGroupListItem) {
      return;
    }

    setCollapsedIn(false);
  };

  return {
    onClickNavItem,
    collapsedIn,
    onToggleSidebar,
  };
};

type UseDesktopSidebarHook = (localStorageKey: string) => ReturnedSidebarHook;

const useDesktopSidebar: UseDesktopSidebarHook = (localStorageKey) => {
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

  const onToggleSidebar = () => {
    if (matches) {
      return setStorageCollapsedIn(!storageCollapsedIn);
    }

    setCollapsedIn(!collapsedIn);
  };

  const onClickNavItem = () => {
    return;
  };

  return {
    onClickNavItem,
    collapsedIn,
    onToggleSidebar,
  };
};

type UseSidebarHook = (localStorageKey: string) => ReturnedSidebarHook;

export const useSidebar: UseSidebarHook = (localStorageKey) => {
  const { isMobile } = useViewportType();

  const mobileProviderValues = useMobileSidebar();
  const desktopProviderValues = useDesktopSidebar(localStorageKey);

  return isMobile ? mobileProviderValues : desktopProviderValues;
};
