import {
  type Dispatch,
  type FunctionComponent,
  type SetStateAction,
  type SyntheticEvent,
} from 'react';

import { Checkbox } from '../../../Checkbox';
import { FormControlLabel } from '../../../FormControlLabel';
import type { MultipleValue, TreeData } from '../types';

import { useLogic } from './useLogic';
import { List, StyledItemContent } from './styles';

export type TreeItemProps = TreeData & {
  /**
   * Выбранные значения
   */
  value?: MultipleValue;

  /**
   * Render-props, позволяет более гибко настраивать содержимое item
   */
  renderItem?: FunctionComponent<Omit<TreeData, 'children'>>;

  /**
   * Уровень вложенности в дереве
   */
  level: number;

  /**
   * Функция, которая запускается при выборе item
   */
  // onChange?: (
  //   value: MultipleValue | ((value: MultipleValue) => Array<string>),
  // ) => void;
  onChange?: Dispatch<SetStateAction<MultipleValue>>;
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
  onChange,
  ...props
}: TreeItemProps) => {
  const { isSelected, isIndeterminate, handleChange } = useLogic({
    id,
    value,
    children,
    onChange,
  });

  const handleClick = (event: SyntheticEvent) => event.stopPropagation();

  if (children.length) {
    return (
      <StyledItemContent
        isRoot
        isSelected={isSelected}
        label={
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected}
                indeterminate={isSelected ? false : isIndeterminate}
              />
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
