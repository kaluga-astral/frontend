import {
  type Dispatch,
  type FunctionComponent,
  type ReactNode,
  type SetStateAction,
} from 'react';

export type MultipleValue = Array<string> | undefined;

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

export type MultipleTreeListProps = {
  /**
   * Выбранные значения
   */
  value?: MultipleValue;

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
  // onChange?: (
  //   value: MultipleValue | ((value: MultipleValue) => Array<string>),
  // ) => void;
  onChange?: Dispatch<SetStateAction<MultipleValue>>;
};
