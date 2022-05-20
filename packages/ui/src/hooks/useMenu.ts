import { MutableRefObject, useRef, useState } from 'react';

type UseMenu = {
  /**
   * Флаг состояния меню (открыто-закрыто)
   */
  open: boolean;
  /**
   * Элемент, к которому привязано меню
   */
  anchorRef: MutableRefObject<null>;
  /**
   * Обработчик открытия меню
   */
  handleCloseMenu: () => void;
  /**
   * Обработчик закрытия меню
   */
  handleOpenMenu: () => void;
};

export function useMenu(): UseMenu {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleCloseMenu = () => setOpen(false);

  const handleOpenMenu = () => setOpen(true);

  return { open, anchorRef, handleCloseMenu, handleOpenMenu };
}
