import { TreeItem } from './TreeItem';
import { type MultipleTreeListProps } from './types';
import { List } from './styles';

export type { MultipleTreeListProps };

const INITIAL_LEVEL = 0;

export const MultipleTreeList = ({
  data,
  value,
  className,
  expandedLevel = 10,
  selectStrategy = 'default',
  ...props
}: MultipleTreeListProps) => (
  <List className={className}>
    {data.map((item) => (
      <TreeItem
        key={item.id}
        value={value}
        {...item}
        level={INITIAL_LEVEL}
        expandedLevel={expandedLevel}
        selectStrategy={selectStrategy}
        {...props}
      />
    ))}
  </List>
);
