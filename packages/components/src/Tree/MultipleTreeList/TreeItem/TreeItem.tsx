import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
  type SyntheticEvent,
} from 'react';

import { Checkbox } from '../../../Checkbox';
import { FormControlLabel } from '../../../FormControlLabel';
import { Tooltip } from '../../../Tooltip';
import type { TreeListData } from '../../types';
import type { MultipleValue } from '../types';

import { useLogic } from './useLogic';
import { List, SelectChildrenButton, StyledItemContent } from './styles';

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
   * Стратегия выбора дочерних элементов при включении родительского элемента
   */
  selectStrategy: 'default' | 'no-children';

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
  selectStrategy,
  onChange,
  ...props
}: TreeItemProps) => {
  const {
    isSelected,
    isIndeterminate,
    isDefaultExpanded,
    isVisibleSelectChildrenButton,
    handleSelectChildren,
    handleChange,
  } = useLogic({
    id,
    value,
    children,
    level,
    isInitialExpanded,
    expandedLevel,
    selectStrategy,
    onChange,
  });

  const handleClick = (event: SyntheticEvent) => event.stopPropagation();

  if (children.length) {
    return (
      <StyledItemContent
        isRoot
        isSelected={isSelected}
        isDefaultExpanded={isDefaultExpanded}
        label={
          <FormControlLabel
            control={
              <Tooltip
                placement="right"
                title={
                  isVisibleSelectChildrenButton && (
                    <SelectChildrenButton
                      variant="text"
                      onClick={handleSelectChildren}
                    >
                      Отметить вложенные
                    </SelectChildrenButton>
                  )
                }
              >
                <Checkbox
                  checked={isSelected}
                  indeterminate={isSelected ? false : isIndeterminate}
                  onChange={handleChange}
                />
              </Tooltip>
            }
            label={renderItem({ id, label, ...props })}
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
              level={level + 1}
              isInitialExpanded={isInitialExpanded}
              expandedLevel={expandedLevel}
              selectStrategy={selectStrategy}
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
      label={
        <FormControlLabel
          control={<Checkbox checked={isSelected} />}
          label={renderItem({ id, label, ...props })}
          onChange={handleChange}
          onClick={handleClick}
        />
      }
      level={level}
      onClick={handleChange}
    />
  );
};
