import { TreeItem as BaseTreeItem } from '../../TreeItem';
import { type TreeItemProps } from '../types';

import { useLogic } from './useLogic';
import { Label, List } from './styles';

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
  const { isSelected, handleChange } = useLogic({
    id,
    value,
    onChange,
  });

  if (children.length) {
    return (
      <BaseTreeItem
        isRoot
        isSelected={isSelected}
        label={<Label variant="ui">{label}</Label>}
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
      </BaseTreeItem>
    );
  }

  return (
    <BaseTreeItem
      isSelected={isSelected}
      label={<Label variant="ui">{label}</Label>}
      level={level}
      component={componentItem}
      onClick={handleChange}
    />
  );
};
