import { type PropsWithChildren } from 'react';
import { type AvatarProps, type MenuProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

export type ProfileProps = {
  /**
   * Имя профиля
   */
  displayName: string;
  /**
   * Дополнительная информация (например email или username)
   */
  annotation?: string;
  /**
   * Аватарка профиля
   */
  avatar?: AvatarProps;
  /**
   * Выпадающее меню
   */
  menu: (
    props: PropsWithChildren<WithoutEmotionSpecific<MenuProps>>,
  ) => JSX.Element;
};
