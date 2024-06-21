import { type ReactNode } from 'react';

export type TreeData = {
  /**
   * Идентификатор элемента в дереве
   */
  id: string;

  /**
   * Подпись или иное содержимое элемента
   */
  label: ReactNode;

  /**
   * Дочерние элементы
   */
  children?: TreeData[];
};
