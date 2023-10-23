import { TypeError } from './enums';

export type State = {
  /**
   * Флаг наличия перехваченной ошибки
   */
  hasError: boolean;
  /**
   * Тип перехваченной ошибки
   */
  typeError: TypeError;
};
