import { ReactNode } from 'react';

export type ContentStateErrorProps = {
  /**
   * Название ошибки
   */
  title?: string;
  /**
   * Изображение ошибки
   * @default '' присваивается в ConfigProvider imagesMap.defaultErrorImgSrc
   * @example <ConfigProvider imagesMap={{ defaultErrorImgSrc: '<img-path>' }} />
   */
  imgSrc?: string;
  /**
   * Alt атрибут для изображения
   */
  imgAlt: string;
  /**
   * Список ошибок для отображения
   */
  errorList: string[];
  /**
   * Элементы кнопок для дальнейших действий
   */
  actions?: ReactNode;
  /**
   * Функция для повторного действия
   */
  onRetry: () => void;
};
