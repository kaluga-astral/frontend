import { TreeItem } from './TreeItem';
import { type TreeListProps } from './types';
import { List } from './styles';

export type { TreeListProps };

const INITIAL_LEVEL = 0;

export const TreeList = ({
  data,
  value,
  className,
  ...props
}: TreeListProps) => (
  <List className={className}>
    {data.map((item) => (
      <TreeItem
        key={item.id}
        value={value}
        {...item}
        level={INITIAL_LEVEL}
        {...props}
      />
    ))}
  </List>
);
