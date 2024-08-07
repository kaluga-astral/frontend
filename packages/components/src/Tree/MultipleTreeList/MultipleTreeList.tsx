import { TreeItem } from './TreeItem';
import { type MultipleTreeListProps } from './types';
import { List } from './styles';
import { useLogic } from './useLogic';

export type { MultipleTreeListProps };

const INITIAL_LEVEL = 0;

export const MultipleTreeList = ({
  data,
  value,
  className,
  expandedLevel = 10,
  disabledItems,
  ...props
}: MultipleTreeListProps) => {
  const { formattedDisabledItems } = useLogic({ disabledItems });

  return (
    <List className={className}>
      {data.map((item) => (
        <TreeItem
          key={item.id}
          value={value}
          {...item}
          level={INITIAL_LEVEL}
          expandedLevel={expandedLevel}
          disabledItems={formattedDisabledItems}
          {...props}
        />
      ))}
    </List>
  );
};
