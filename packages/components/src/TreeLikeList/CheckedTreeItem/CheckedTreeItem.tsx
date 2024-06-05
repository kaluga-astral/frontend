import { Collapse } from '../../Collapse';
import { Checkbox } from '../../Checkbox';
import { FormControlLabel } from '../../FormControlLabel';
import { type CheckedTreeItemProps } from '../types';
import { ChevronIcon, CollapseButton, InnerList, Item } from '../styles';

import { useLogic } from './useLogic';
import { ItemContent } from './styles';

export const CheckedTreeItem = ({
  id,
  label,
  level,
  componentList = 'ul',
  componentItem = 'li',
  listProps,
  itemProps,
  children = [],
  value = [],
  onChange,
}: CheckedTreeItemProps) => {
  const { isOpen, isSelected, isIndeterminate, handleToggle, handleChange } =
    useLogic({ id, value, children, onChange });

  if (children.length) {
    return (
      <Item {...itemProps} $level={level} as={componentItem}>
        <ItemContent
          $isSelected={isSelected}
          $level={level}
          onClick={handleChange}
        >
          <CollapseButton variant="text" onClick={handleToggle}>
            <ChevronIcon $isActive={isOpen} />
          </CollapseButton>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSelected}
                indeterminate={isSelected ? false : isIndeterminate}
              />
            }
            label={label}
            onChange={handleChange}
            onClick={(event) => event.stopPropagation()}
          />
        </ItemContent>

        <Collapse in={isOpen}>
          <InnerList {...listProps} as={componentList}>
            {children.map((item) => (
              <CheckedTreeItem
                key={item.id}
                {...item}
                componentList={componentList}
                componentItem={componentItem}
                listProps={listProps}
                itemProps={itemProps}
                level={level + 1}
                value={value}
                onChange={onChange}
              />
            ))}
          </InnerList>
        </Collapse>
      </Item>
    );
  }

  return (
    <Item {...itemProps} $level={level} as={componentItem}>
      <ItemContent
        $isSelected={isSelected}
        $level={level}
        onClick={handleChange}
      >
        <FormControlLabel
          control={<Checkbox checked={isSelected} />}
          label={label}
          onChange={handleChange}
          onClick={(event) => event.stopPropagation()}
        />
      </ItemContent>
    </Item>
  );
};
