import { type ElementType } from 'react';

import { TreeItem } from './TreeItem';
import { type TreeListProps } from './types';
import { List } from './styles';

export type { TreeListProps };

export const TreeList = <
  TComponentList extends ElementType,
  TComponentItem extends ElementType,
>({
  data,
  value,
  className,
  componentList = 'ul' as TComponentList,
  componentItem = 'li' as TComponentItem,
  listProps,
  ...props
}: TreeListProps<TComponentList, TComponentItem>) => (
  <List as={componentList} {...listProps} className={className}>
    {data.map((item) => (
      <TreeItem
        key={item.id}
        value={value}
        componentList={componentList}
        componentItem={componentItem}
        listProps={listProps}
        {...item}
        level={0}
        {...props}
      />
    ))}
  </List>
);
