import { MutableRefObject, useRef, useState } from 'react';

type UseMenuResult = {
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

export function useMenu(): UseMenuResult {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleCloseMenu = () => setOpen(false);

  const handleOpenMenu = () => setOpen(true);

  return { open, anchorRef, handleCloseMenu, handleOpenMenu };
}
