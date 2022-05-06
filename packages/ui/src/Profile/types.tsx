import { AvatarProps, MenuProps } from '@mui/material';

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
  menu: React.FC<MenuProps>;
};
