import { type ElementType } from 'react';

import { TreeItem } from './TreeItem';
import { type MultipleTreeListProps } from './types';
import { List } from './styles';

export type { MultipleTreeListProps };

export const MultipleTreeList = <
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
}: MultipleTreeListProps<TComponentList, TComponentItem>) => (
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
