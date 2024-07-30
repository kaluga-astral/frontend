import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = Pick<
  TreeItemProps,
  | 'id'
  | 'value'
  | 'level'
  | 'isInitialExpanded'
  | 'expandedLevel'
  | 'disabledItems'
  | 'onChange'
>;

export const useLogic = ({
  id,
  value,
  level,
  isInitialExpanded,
  expandedLevel,
  disabledItems,
  onChange,
}: UseLogicProps) => {
  const isSelected = Object.is(value, id);
  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;

  const findItem =
    disabledItems && disabledItems.find((item) => item.id === id);
  const isDisabled = !!findItem;
  const disableReason = findItem?.disableReason;

  const handleChange = () => {
    onChange?.(id);
  };

  return {
    isSelected,
    isDefaultExpanded,
    isDisabled,
    disableReason,
    handleChange,
  };
};
