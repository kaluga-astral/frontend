import { type FunctionComponent } from 'react';

import type { TreeListData } from '../types';

export type Value = string | undefined;

export type DisabledItemValue = string | { id: string; disableReason?: string };

export type TreeListProps = {
  /**
   * Выбранное значение
   */
  value?: Value;

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
   * Список `value` элементов дерева, которые не доступны для взаимодействия
   */
  disabledItems?: Array<DisabledItemValue>;

  /**
   * Render-props, позволяет более гибко настраивать содержимое item
   */
  renderItem?: FunctionComponent<Omit<TreeListData, 'children'>>;

  /**
   * Функция, которая запускается при изменении состояния.
   */
  onChange?: (value: Value) => void;
};
