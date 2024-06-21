import { type FunctionComponent } from 'react';

import type { TreeData } from '../types';

export type Value = string | undefined;

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
   * Если true, то дерево будет раскрыто по умолчанию
   * @default 'false'
   */
  isInitialExpanded?: boolean;

  /**
   * Уровень раскрытия дерева по умолчанию, при isExpanded=true
   * @default '10'
   */
  expandedLevel?: number;

  /**
   * Render-props, позволяет более гибко настраивать содержимое item
   */
  renderItem?: FunctionComponent<Omit<TreeData, 'children'>>;

  /**
   * Функция, которая запускается при изменении состояния.
   */
  onChange?: (value: Value) => void;
};
