import { type FunctionComponent } from 'react';

import { TreeItem as BaseTreeItem } from '../../TreeItem';
import type { TreeListData } from '../../types';
import type { Value } from '../types';

import { useLogic } from './useLogic';
import { List } from './styles';

type FormatDisableItem = { id: string; disableReason?: string };

export type TreeItemProps = TreeListData & {
  /**
   * Выбранные значения
   */
  value?: Value;

  /**
   * Уникальный префикс для идентификаторов в рамках дерева
   */
  prefixId?: string;

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
   * Цепочка идентификаторов до выбранного элемента дерева
   */
  chainToSelectedItem?: Array<Value>;

  /**
   * Список `value` элементов дерева, которые не доступны для взаимодействия
   */
  disabledItems?: Array<FormatDisableItem>;

  /**
   * Функция, которая запускается при выборе item
   */
  onChange?: (value: Value) => void;
};

export const TreeItem = (props: TreeItemProps) => {
  const {
    isSelected,
    isDefaultExpanded,
    isDisabled,
    disableReason,
    handleChange,
  } = useLogic(props);

  const {
    id,
    prefixId,
    label,
    note,
    level,
    renderItem,
    children = [],
    value,
    isInitialExpanded,
    expandedLevel,
    chainToSelectedItem,
    disabledItems,
    onChange,
  } = props;

  if (children.length) {
    return (
      <BaseTreeItem
        id={id}
        prefixId={prefixId}
        isSelected={isSelected}
        isDefaultExpanded={isDefaultExpanded}
        isDisabled={isDisabled}
        disableReason={disableReason}
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
              prefixId={prefixId}
              renderItem={renderItem}
              level={level + 1}
              isInitialExpanded={isInitialExpanded}
              expandedLevel={expandedLevel}
              chainToSelectedItem={chainToSelectedItem}
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
        prefixId={prefixId}
        isSelected={isSelected}
        isDisabled={isDisabled}
        disableReason={disableReason}
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
