import { type FunctionComponent, type SyntheticEvent } from 'react';

import type { TreeListData } from '../../Tree';
import type { MultipleValue } from '../types';
import { FormControlLabel } from '../../FormControlLabel';

import { useLogic } from './useLogic';
import { List, StyledCheckbox, StyledTreeItem } from './styles';

type FormatDisableItem = { id: string; disableReason?: string };

export type TreeItemProps = TreeListData & {
  /**
   * Выбранные значения
   */
  value?: MultipleValue;

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
  disabledItems?: Array<FormatDisableItem>;

  /**
   * Функция, которая запускается при выборе item
   */
  onChange: (value: MultipleValue) => void;
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
  const {
    isSelected,
    isDefaultExpanded,
    disableReason,
    isDisabled,
    nextLevel,
    handleChange,
  } = useLogic({
    id,
    value,
    level,
    isInitialExpanded,
    expandedLevel,
    disabledItems,
    onChange,
  });

  /**
   * Предотвращаем всплытие события, так как клик в области чекбокса или label вызывает обработчик на уровне всего item
   */
  const handleClick = (event: SyntheticEvent) => event.stopPropagation();

  if (children.length) {
    return (
      <StyledTreeItem
        isRoot
        isSelected={isSelected}
        isDefaultExpanded={isDefaultExpanded}
        disableReason={disableReason}
        isDisabled={isDisabled}
        note={renderItem ? null : note}
        isNotBlockingExpandList
        component="li"
        label={
          <FormControlLabel
            control={<StyledCheckbox checked={isSelected} />}
            label={renderItem ? renderItem({ label, note, id }) : label}
            disabled={isDisabled}
            onChange={handleChange}
            onClick={handleClick}
          />
        }
        level={level}
        onClick={handleChange}
      >
        <List>
          {children.map((child) => (
            <TreeItem
              key={child.id}
              {...child}
              renderItem={renderItem}
              level={nextLevel}
              isInitialExpanded={isInitialExpanded}
              expandedLevel={expandedLevel}
              disabledItems={disabledItems}
              value={value}
              onChange={onChange}
            />
          ))}
        </List>
      </StyledTreeItem>
    );
  }

  return (
    <StyledTreeItem
      isSelected={isSelected}
      isDisabled={isDisabled}
      disableReason={disableReason}
      note={renderItem ? null : note}
      component="li"
      label={
        <FormControlLabel
          control={<StyledCheckbox checked={isSelected} />}
          label={renderItem ? renderItem({ label, note, id }) : label}
          disabled={isDisabled}
          onChange={handleChange}
          onClick={handleClick}
        />
      }
      level={level}
      onClick={handleChange}
    />
  );
};
