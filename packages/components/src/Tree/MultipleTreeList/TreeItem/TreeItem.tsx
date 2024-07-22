import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
  type SyntheticEvent,
} from 'react';

import { Checkbox } from '../../../Checkbox';
import { FormControlLabel } from '../../../FormControlLabel';
import type { TreeListData } from '../../types';
import type { MultipleValue } from '../types';
import { Tooltip } from '../../../Tooltip';

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
   * Кортеж `value` элементов дерева, которые не доступны для взаимодействия и `reason` причина блокировки
   */
  disableReasonItems?: Array<[string, string]>;

  /**
   * Функция, которая запускается при выборе item
   */
  onChange: Dispatch<SetStateAction<MultipleValue>>;
};

const DEFAULT_RENDER_ITEM: TreeItemProps['renderItem'] = ({ label }) => (
  <>{label}</>
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
  disableReasonItems,
  onChange,
  ...props
}: TreeItemProps) => {
  const {
    isSelected,
    isIndeterminate,
    isDefaultExpanded,
    isDisabled,
    disableReason,
    handleChange,
  } = useLogic({
    id,
    value,
    children,
    level,
    isInitialExpanded,
    expandedLevel,
    disabledItems,
    disableReasonItems,
    onChange,
  });

  const handleClick = (event: SyntheticEvent) => event.stopPropagation();

  if (children.length) {
    return (
      <StyledItemContent
        isRoot
        isSelected={isSelected}
        isDefaultExpanded={isDefaultExpanded}
        isDisabled={isDisabled}
        // disableReason={disableReason}
        component="li"
        label={
          <Tooltip
            title={isDisabled && disableReason}
            // placement="bottom-start"
            withoutContainer={!isDisabled}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={isSelected}
                  indeterminate={isSelected ? false : isIndeterminate}
                />
              }
              label={renderItem({ id, label, ...props })}
              disabled={isDisabled}
              onChange={handleChange}
              onClick={handleClick}
            />
          </Tooltip>
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
              level={level + 1}
              isInitialExpanded={isInitialExpanded}
              expandedLevel={expandedLevel}
              disabledItems={disabledItems}
              disableReasonItems={disableReasonItems}
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
      // disableReason={disableReason}
      component="li"
      label={
        <Tooltip
          title={isDisabled && disableReason}
          // placement="bottom-start"
          withoutContainer={!isDisabled}
        >
          <FormControlLabel
            control={<Checkbox checked={isSelected} />}
            label={renderItem({ id, label, ...props })}
            disabled={isDisabled}
            onChange={handleChange}
            onClick={handleClick}
          />
        </Tooltip>
      }
      level={level}
      onClick={handleChange}
    />
  );
};
