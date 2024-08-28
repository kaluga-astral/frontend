import type { MouseEventHandler, ReactNode } from 'react';

import type { TooltipProps } from '../Tooltip';
import type { MenuItemProps } from '../MenuItem';
import type { IconButtonProps } from '../IconButton';

export type SecondaryActionKind<T> = MenuItemProps &
  SingleAction<T> & {
    /**
     * Причина блокировки
     */
    disabledReason?: TooltipProps['title'];
  };

export type NestedAction<T> = MenuItemProps & {
  /**
   * Обработчик действия
   */
  onClick?: (row: T) => void;

  /**
   * Название действия
   */
  name: string;
};

export type SingleAction<T> = {
  /**
   * Причина блокировки
   */
  disabledReason?: TooltipProps['title'];

  /**
   * Иконка действия
   */
  icon?: ReactNode;

  /**
   * Обработчик действия
   */
  onClick?: (row: T) => void;

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
};

export type MultipleAction<T> = MenuItemProps & {
  /**
   * Иконка действия
   */
  icon: ReactNode;

  /**
   * Список действий для выпадающего списка
   */
  actions: Array<NestedAction<T>>;

  /**
   * Флаг показа выпадающего списка при клике
   */
  nested: true;

  /**
   * Название действия
   */
  name: string;
};

export type ActionCellHandler<T> = (
  onClick: SingleAction<T>['onClick'] | NestedAction<T>['onClick'],
) =>
  | MouseEventHandler<HTMLButtonElement | HTMLAnchorElement | HTMLLIElement>
  | undefined;

export type MainActionKind<T> =
  | (IconButtonProps & SingleAction<T>)
  | MultipleAction<T>;
