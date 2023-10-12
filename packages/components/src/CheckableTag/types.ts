import { ChangeEvent, ReactElement } from 'react';

import { TagAddonProps, TagProps } from '../Tag';

export type CheckableTagAddonProps = {
  checked?: boolean;
  disabled?: boolean;
} & TagAddonProps;

export type CheckableTagAddon = (
  props: CheckableTagAddonProps,
) => ReactElement | null;

export type CheckableTagProps = Omit<
  TagProps,
  'onChange' | 'startAddon' | 'endAddon'
> & {
  /**
   * Состояние тега
   */
  checked?: boolean;
  /**
   * Обработчик изменения состояния тега
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Блокировка клика по тегу
   */
  disabled?: boolean;
  /**
   * Контент слева от label

   */
  startAddon?: CheckableTagAddon;

  /**
   * Контент справа от label
   */
  endAddon?: CheckableTagAddon;
};
