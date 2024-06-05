import { type ElementType } from 'react';

import { TreeItem } from './TreeItem';
import { CheckedTreeItem } from './CheckedTreeItem';
import { type TreeLikeListProps } from './types';
import { List } from './styles';

export type { TreeLikeListProps };

export const TreeLikeList = <
  TComponentList extends ElementType,
  TComponentItem extends ElementType,
>({
  data,
  value,
  className,
  multiple,
  componentList = 'ul' as TComponentList,
  componentItem = 'li' as TComponentItem,
  listProps,
  onChange,
  ...props
}: TreeLikeListProps<TComponentList, TComponentItem>) => (
  <List as={componentList} {...listProps} className={className}>
    {data.map((item) => {
      if (multiple) {
        return (
          <CheckedTreeItem
            key={item.id}
            value={value}
            componentList={componentList}
            componentItem={componentItem}
            listProps={listProps}
            {...item}
            level={0}
            {...props}
            onChange={onChange}
          />
        );
      }

      return (
        <TreeItem
          key={item.id}
          value={value}
          componentList={componentList}
          componentItem={componentItem}
          listProps={listProps}
          {...item}
          level={0}
          {...props}
          onChange={onChange}
        />
      );
    })}
  </List>
);
