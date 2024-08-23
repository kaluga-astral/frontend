import type { MouseEventHandler, ReactNode } from 'react';

import type { MenuItemProps } from '../MenuItem';
import type { IconButtonProps } from '../IconButton';

export type NestedAction<TAction> = MenuItemProps & {
  /**
   * Обработчик действия
   */
  onClick?: (row: TAction) => void;
  /**
   * Название действия
   */
  name: string;
};

export type SingleAction<TAction> = {
  /**
   * Причина блокировки действия
   */
  disabledReason?: string;
  /**
   * Иконка действия
   */
  icon?: ReactNode;
  /**
   * Обработчик действия
   */
  onClick?: (row: TAction) => void;
  /**
   * Название действия
   */
  name: string;
  /**
   * Флаг показа выпадающего списка при клике
   */
  nested?: false;
  /**
   * Если true, блокирует взаимодействие с actions
   */
  isBlockingOperation?: boolean;
  /**
   * Причина блокировки строки во время загрузки
   */
  loadingNote?: string;
};

export type MultipleAction<TAction> = MenuItemProps & {
  /**
   * Иконка действия
   */
  icon: ReactNode;
  /**
   * Список действий для выпадающего списка
   */
  actions: Array<NestedAction<TAction>>;
  /**
   * Флаг показа выпадающего списка при клике
   */
  nested: true;
  /**
   * Название действия
   */
  name: string;
  /**
   * Причина блокировки строки во время загрузки
   */
  loadingNote?: string;
  /**
   * Если true, блокирует взаимодействие с actions
   */
  isBlockingOperation?: boolean;
  /**
   * Если true, происходит загрузка
   */
  loading?: boolean;
};

export type ActionCellHandler<TAction> = (
  onClick: SingleAction<TAction>['onClick'] | NestedAction<TAction>['onClick'],
) =>
  | MouseEventHandler<HTMLButtonElement | HTMLAnchorElement | HTMLLIElement>
  | undefined;

export type MainActionKind<TAction> =
  | (IconButtonProps & SingleAction<TAction>)
  | MultipleAction<TAction>;

export type SecondaryActionKind<TAction> = MenuItemProps &
  SingleAction<TAction> & {
    /**
     * Причина блокировки действия
     */
    disabledReason?: string;
    /**
     * Если true, происходит загрузка
     */
    loading?: boolean;
  };
