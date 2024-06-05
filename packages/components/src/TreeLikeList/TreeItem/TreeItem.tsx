import { Collapse } from '../../Collapse';
import { type TreeItemProps } from '../types';
import {
  ChevronIcon,
  CollapseButton,
  InnerList,
  Item,
  ItemContent,
} from '../styles';

import { useLogic } from './useLogic';
import { Label } from './styles';

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
  const { isOpen, isSelected, handleToggle, handleChange } = useLogic({
    id,
    value,
    onChange,
  });

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
          <Label variant="ui">{label}</Label>
        </ItemContent>

        <Collapse in={isOpen}>
          <InnerList {...listProps} as={componentList}>
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
        <Label variant="ui">{label}</Label>
      </ItemContent>
    </Item>
  );
};
