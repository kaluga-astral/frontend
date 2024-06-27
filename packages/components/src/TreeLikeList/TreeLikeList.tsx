import { TreeItem } from './TreeItem';
import { type TreeLikeListProps } from './types';
import { List } from './styles';

export type { TreeLikeListProps };

const INITIAL_LEVEL = 0;

export const TreeLikeList = ({
  data,
  value,
  className,
  expandedLevel = 10,
  ...props
}: TreeLikeListProps) => (
  <List className={className}>
    {data.map((item) => (
      <TreeItem
        key={item.id}
        value={value}
        {...item}
        level={INITIAL_LEVEL}
        expandedLevel={expandedLevel}
        {...props}
      />
    ))}
  </List>
);
