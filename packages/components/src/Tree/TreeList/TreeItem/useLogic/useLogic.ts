import { type TreeItemProps } from '../TreeItem';

type UseLogicProps = TreeItemProps;

export const useLogic = ({
  id,
  value,
  level,
  options,
  isInitialExpanded,
  expandedLevel,
  chainToSelectedItem = [],
  disabledItems,
  onChange,
}: UseLogicProps) => {
  const isSelected = Object.is(value, id);

  const checkIsDefaultExpanded = () => {
    if (chainToSelectedItem.includes(id)) {
      return true;
    }

    if (options?.hasOwnProperty('isDefaultExpanded')) {
      return options.isDefaultExpanded;
    }

    return isInitialExpanded && level <= expandedLevel - 1;
  };

  const isDefaultExpanded = checkIsDefaultExpanded();

  const disabledItem = disabledItems?.find((item) => item.id === id);
  const isDisabled = Boolean(disabledItem);
  const disableReason = disabledItem?.disableReason;

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
