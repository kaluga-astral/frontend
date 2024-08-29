import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = TreeItemProps;

export const useLogic = ({
  id,
  value,
  level,
  isInitialExpanded,
  expandedLevel,
  chainToSelectedItem = [],
  disabledItems,
  onChange,
}: UseLogicProps) => {
  const isSelected = Object.is(value, id);
  const isDefaultExpanded =
    chainToSelectedItem.includes(id) ||
    (isInitialExpanded && level <= expandedLevel - 1);

  const disabledItem = disabledItems?.find((item) => item.id === id);
  const isDisabled = Boolean(disabledItem);
  const disableReason = disabledItem?.disableReason;

  const nextLevel = level + 1;

  const handleChange = () => {
    onChange?.(id);
  };

  return {
    isSelected,
    isDefaultExpanded,
    isDisabled,
    disableReason,
    nextLevel,
    handleChange,
  };
};
