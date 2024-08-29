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
  note?: ReactNode;

  /**
   * Дочерние элементы
   */
  children?: TreeListData[];

  /**
   * Предназначены для точечной конфигурации
   */
  options?: {
    /**
     * Если true, то вложенный список будет раскрыт
     * @default 'false'
     */
    isDefaultExpanded?: boolean;
  };
};
