import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
  type SyntheticEvent,
} from 'react';

import type { TreeListData } from '../../types';
import type { MultipleValue } from '../types';
import { ItemWrapper, Label, SubTitle } from '../../TreeList/TreeItem/styles';

import { useLogic } from './useLogic';
import {
  List,
  StyledCheckbox,
  StyledFormControlLabel,
  StyledItemContent,
} from './styles';

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

const DEFAULT_RENDER_ITEM: TreeItemProps['renderItem'] = ({
  label,
  subtitle,
}) => (
  <ItemWrapper>
    <Label variant="ui">{label}</Label>
    {subtitle && <SubTitle variant="small">{subtitle}</SubTitle>}
  </ItemWrapper>
);

export const TreeItem = ({
  id,
  label,
  subtitle,
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
  const {
    isSelected,
    isIndeterminate,
    isDefaultExpanded,
    isDisabled,
    handleChange,
  } = useLogic({
    id,
    value,
    children,
    level,
    isInitialExpanded,
    expandedLevel,
    disabledItems,
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
        subtitle={subtitle}
        component="li"
        label={
          <StyledFormControlLabel
            $subtitle={subtitle}
            control={
              <StyledCheckbox
                $subtitle={subtitle}
                checked={isSelected}
                indeterminate={isSelected ? false : isIndeterminate}
              />
            }
            label={renderItem({ id, label, subtitle, ...props })}
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
              level={level + 1}
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
      subtitle={subtitle}
      component="li"
      label={
        <StyledFormControlLabel
          $subtitle={subtitle}
          control={<StyledCheckbox $subtitle={subtitle} checked={isSelected} />}
          label={renderItem({ id, label, subtitle, ...props })}
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
