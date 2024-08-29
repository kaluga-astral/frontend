import { TreeItem } from './TreeItem';
import { type TreeLikeListProps } from './types';
import { List } from './styles';
import { useLogic } from './useLogic';

export type { TreeLikeListProps };

const INITIAL_LEVEL = 0;

export const TreeLikeList = (props: TreeLikeListProps) => {
  const { listProps, itemProps } = useLogic(props);

  const {
    data,
    className,
    expandedLevel = 10,
    disabledItems,
    ...restProps
  } = props;

  return (
    <List className={className} {...listProps}>
      {data.map((item) => (
        <TreeItem
          key={item.id}
          {...item}
          level={INITIAL_LEVEL}
          expandedLevel={expandedLevel}
          {...itemProps}
          {...restProps}
        />
      ))}
    </List>
  );
};
