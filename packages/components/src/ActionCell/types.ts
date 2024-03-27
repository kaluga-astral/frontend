import type { MouseEventHandler, ReactNode } from 'react';

import type { TooltipProps } from '../Tooltip';
import type { MenuItemProps } from '../MenuItem';
import type { IconButtonProps } from '../IconButton';

export type SecondaryAction<T> = MenuItemProps &
  SingleAction<T> & {
    /**
     * Причина дизейбла
     */
    disabledReason?: TooltipProps['title'];
    /**
     * Если действие - ссылка, то будет поведение, свойственное для тега a
     */
    href?: string;
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

export type MainActionWithDisableReason<T> = MainActionKind<T> & {
  disabledReason?: TooltipProps['title'];
};
