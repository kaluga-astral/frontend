import { type FunctionComponent } from 'react';

import { TreeItem as BaseTreeItem } from '../../TreeItem';
import type { TreeListData } from '../../types';
import type { Value } from '../types';

import { useLogic } from './useLogic';
import { List } from './styles';

export type TreeItemProps = TreeListData & {
  /**
   * Выбранные значения
   */
  value?: Value;

  /**
   * Render-props, позволяет более гибко настраивать содержимое item
   */
  renderItem?: FunctionComponent<Omit<TreeListData, 'children'>>;

  /**
   * Уровень вложенности в дереве
   */
  level: number;

  /**
   * Если true, то дерево будет раскрыто по умолчанию
   * @default false
   */
  isInitialExpanded?: boolean;

  /**
   * Уровень раскрытия дерева по умолчанию, при isExpanded=true
   */
  expandedLevel: number;

  /**
   * Список `value` элементов дерева, которые не доступны для взаимодействия
   */
  disabledItems?: Array<string>;

  /**
   * Функция, которая запускается при выборе item
   */
  onChange?: (value: Value) => void;
};

export const TreeItem = ({
  id,
  label,
  note,
  level,
  renderItem,
  children = [],
  value,
  isInitialExpanded,
  expandedLevel,
  disabledItems,
  onChange,
}: TreeItemProps) => {
  const { isSelected, isDefaultExpanded, isDisabled, handleChange } = useLogic({
    id,
    value,
    level,
    isInitialExpanded,
    expandedLevel,
    disabledItems,
    onChange,
  });

  if (children.length) {
    return (
      <BaseTreeItem
        id={id}
        isRoot
        isSelected={isSelected}
        isDefaultExpanded={isDefaultExpanded}
        isDisabled={isDisabled}
        component="li"
        label={label}
        renderItem={renderItem}
        note={note}
        level={level}
        onClick={handleChange}
      >
        <List>
          {children.map((child) => (
            <TreeItem
              key={child.id}
              {...child}
              renderItem={renderItem}
              level={level + 1}
              isInitialExpanded={isInitialExpanded}
              expandedLevel={expandedLevel}
              disabledItems={disabledItems}
              value={value}
              onChange={onChange}
            />
          ))}
        </List>
      </BaseTreeItem>
    );
  }

  return (
    <>
      <BaseTreeItem
        id={id}
        isSelected={isSelected}
        isDisabled={isDisabled}
        component="li"
        label={label}
        renderItem={renderItem}
        note={note}
        level={level}
        onClick={handleChange}
      />
    </>
  );
};
