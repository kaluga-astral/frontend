import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = Pick<
  TreeItemProps,
  'id' | 'value' | 'level' | 'isExpanded' | 'expandedLevel' | 'onChange'
>;

export const useLogic = ({
  id,
  value,
  level,
  isExpanded,
  expandedLevel,
  onChange,
}: UseLogicProps) => {
  const isSelected = Object.is(value, id);

  const isDefaultExpanded = isExpanded && level <= expandedLevel - 1;

  const handleChange = () => {
    onChange?.(id);
  };

  return {
    isSelected,
    isDefaultExpanded,
    handleChange,
  };
};
