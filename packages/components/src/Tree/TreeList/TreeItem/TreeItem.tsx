import { type FunctionComponent } from 'react';

import { TreeItem as BaseTreeItem } from '../../TreeItem';
import type { TreeData } from '../../types';
import type { Value } from '../types';

import { useLogic } from './useLogic';
import { Label, List } from './styles';

export type TreeItemProps = TreeData & {
  /**
   * Выбранные значения
   */
  value?: Value;

  /**
   * Render-props, позволяет более гибко настраивать содержимое item
   */
  renderItem?: FunctionComponent<Omit<TreeData, 'children'>>;

  /**
   * Уровень вложенности в дереве
   */
  level: number;

  /**
   * Если true, то дерево будет раскрыто по умолчанию
   * @default false
   */
  isExpanded?: boolean;

  /**
   * Уровень раскрытия дерева по умолчанию, при isExpanded=true
   */
  expandedLevel: number;

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
  isExpanded,
  expandedLevel,
  onChange,
  ...props
}: TreeItemProps) => {
  const { isSelected, isDefaultExpanded, handleChange } = useLogic({
    id,
    value,
    level,
    isExpanded,
    expandedLevel,
    onChange,
  });

  if (children.length) {
    return (
      <BaseTreeItem
        isRoot
        isSelected={isSelected}
        isDefaultExpanded={isDefaultExpanded}
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
              isExpanded={isExpanded}
              expandedLevel={expandedLevel}
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
      component="li"
      label={renderItem({ id, label, ...props })}
      level={level}
      onClick={handleChange}
    />
  );
};
