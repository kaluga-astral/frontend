import { type FunctionComponent, type ReactNode } from 'react';

export type Value = string | undefined;

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

export type TreeListProps = {
  /**
   * Выбранное значение
   */
  value?: Value;

  /**
   * Данные, которые необходимо отобразить в виде дерева.
   */
  data: TreeData[];

  /**
   * Название класса, применяется к корневому компоненту.
   */
  className?: string;

  /**
   * Render-props, позволяет более гибко настраивать содержимое item
   */
  renderItem?: FunctionComponent<Omit<TreeData, 'children'>>;

  /**
   * Функция, которая запускается при изменении состояния.
   */
  onChange?: (value: Value) => void;
};
