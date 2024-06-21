import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
} from 'react';

import type { TreeListData } from '../types';

export type MultipleValue = Array<string> | undefined;

export type MultipleTreeListProps = {
  /**
   * Выбранные значения
   */
  value?: MultipleValue;

  /**
   * Данные, которые необходимо отобразить в виде дерева.
   */
  data: TreeListData[];

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
  renderItem?: FunctionComponent<Omit<TreeListData, 'children'>>;

  /**
   * Функция, которая запускается при изменении состояния.
   */
  onChange: Dispatch<SetStateAction<MultipleValue>>;
};
