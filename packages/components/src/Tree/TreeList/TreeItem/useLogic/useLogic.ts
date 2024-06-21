import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = Pick<
  TreeItemProps,
  'id' | 'value' | 'level' | 'isInitialExpanded' | 'expandedLevel' | 'onChange'
>;

export const useLogic = ({
  id,
  value,
  level,
  isInitialExpanded,
  expandedLevel,
  onChange,
}: UseLogicProps) => {
  const isSelected = Object.is(value, id);

  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;

  const handleChange = () => {
    onChange?.(id);
  };

  return {
    isSelected,
    isDefaultExpanded,
    handleChange,
  };
};
