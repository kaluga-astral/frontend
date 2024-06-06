import { Checkbox } from '../../Checkbox';
import { FormControlLabel } from '../../FormControlLabel';
import { type TreeItemProps } from '../types';

import { useLogic } from './useLogic';
import { List, StyledItemContent } from './styles';

export const TreeItem = ({
  id,
  label,
  level,
  componentList = 'ul',
  componentItem = 'li',
  listProps,
  itemProps,
  children = [],
  value,
  onChange,
}: TreeItemProps) => {
  const { isSelected, isIndeterminate, handleChange } = useLogic({
    id,
    value,
    children,
    onChange,
  });

  console.count(id);

  const handleClick = (event) => event.stopPropagation();

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
            label={label}
            onChange={handleChange}
            onClick={handleClick}
          />
        }
        level={level}
        component={componentItem}
        onClick={handleChange}
      >
        <List {...listProps} as={componentList}>
          {children.map((child) => (
            <TreeItem
              key={child.id}
              {...child}
              componentList={componentList}
              componentItem={componentItem}
              listProps={listProps}
              itemProps={itemProps}
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
          label={label}
          onChange={handleChange}
          onClick={handleClick}
        />
      }
      level={level}
      component={componentItem}
      onClick={handleChange}
    />
  );
};
