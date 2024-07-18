import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
  type SyntheticEvent,
} from 'react';

import type { TreeListData } from '../../Tree';
import type { MultipleValue } from '../types';
import { FormControlLabel } from '../../FormControlLabel';
import { Checkbox } from '../../Checkbox';

import { useLogic } from './useLogic';
import { List, StyledItemContent } from './styles';

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
  disabledItems?: MultipleValue;

  /**
   * Функция, которая запускается при выборе item
   */
  onChange: Dispatch<SetStateAction<MultipleValue>>;
};

// const DEFAULT_RENDER_ITEM: TreeItemProps['renderItem'] = ({
//   label,
//   subtitle,
// }) => (
//   <ItemWrapper>
//     <Label variant="ui">{label}</Label>
//     {subtitle && <SubTitle variant="small">{subtitle}</SubTitle>}
//   </ItemWrapper>
// );

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
  // ...props
}: TreeItemProps) => {
  const { isSelected, isDefaultExpanded, isDisabled, nextLevel, handleChange } =
    useLogic({
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
      <StyledItemContent
        isRoot
        isSelected={isSelected}
        isDefaultExpanded={isDefaultExpanded}
        isDisabled={isDisabled}
        note={note}
        isNotBlockingExpandList
        component="li"
        label={
          <FormControlLabel
            control={<Checkbox checked={isSelected} />}
            label={label}
            disabled={isDisabled}
            onChange={handleChange}
            onClick={handleClick}
          />
        }
        level={level}
        renderItem={renderItem}
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
      </StyledItemContent>
    );
  }

  return (
    <StyledItemContent
      isSelected={isSelected}
      isDisabled={isDisabled}
      renderItem={renderItem}
      note={note}
      component="li"
      label={
        <FormControlLabel
          control={<Checkbox checked={isSelected} />}
          label={label}
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
