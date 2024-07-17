import { type ReactNode } from 'react';

export type TreeListData = {
  /**
   * Идентификатор элемента в дереве
   */
  id: string;

  /**
   * Подпись или иное содержимое элемента
   */
  label: ReactNode;

  /**
   * Подзаголовок элемента дерева
   */
  subtitle?: ReactNode;

  /**
   * Дочерние элементы
   */
  children?: TreeListData[];
};
