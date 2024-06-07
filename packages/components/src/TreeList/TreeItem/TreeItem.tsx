import { type ReactNode } from 'react';

import { TreeItem as BaseTreeItem } from '../../TreeItem';
import type { TreeData, Value } from '../types';

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
  renderItem?: (id: string, label: ReactNode) => JSX.Element;

  /**
   * Уровень вложенности в дереве
   */
  level: number;

  /**
   * Функция, которая запускается при выборе item
   */
  onChange?: (value: Value) => void;
};

const DEFAULT_RENDER_ITEM: TreeItemProps['renderItem'] = (_, label) => (
  <Label variant="ui">{label}</Label>
);

export const TreeItem = ({
  id,
  label,
  level,
  renderItem = DEFAULT_RENDER_ITEM,
  children = [],
  value,
  onChange,
}: TreeItemProps) => {
  const { isSelected, handleChange } = useLogic({
    id,
    value,
    onChange,
  });

  if (children.length) {
    return (
      <BaseTreeItem
        isRoot
        isSelected={isSelected}
        component="li"
        label={renderItem(id, label)}
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
      label={renderItem(id, label)}
      level={level}
      onClick={handleChange}
    />
  );
};
