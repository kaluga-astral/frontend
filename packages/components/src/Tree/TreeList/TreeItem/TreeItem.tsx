import { type FunctionComponent } from 'react';

import { TreeItem as BaseTreeItem } from '../../TreeItem';
import type { TreeListData } from '../../types';
import type { Value } from '../types';

import { useLogic } from './useLogic';
import { Label, List } from './styles';

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

const DEFAULT_RENDER_ITEM: TreeItemProps['renderItem'] = ({ label }) => (
  <Label variant="ui">{label}</Label>
);

export const TreeItem = ({
  id,
  label,
  level,
  renderItem = DEFAULT_RENDER_ITEM,
  children = [],
  value,
  isInitialExpanded,
  expandedLevel,
  disabledItems,
  onChange,
  ...props
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
        isRoot
        isSelected={isSelected}
        isDefaultExpanded={isDefaultExpanded}
        isDisabled={isDisabled}
        component="li"
        label={renderItem({ id, label, ...props })}
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
    <BaseTreeItem
      isSelected={isSelected}
      isDisabled={isDisabled}
      component="li"
      label={renderItem({ id, label, ...props })}
      level={level}
      onClick={handleChange}
    />
  );
};
