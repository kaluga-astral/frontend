import { type MultipleValue } from '../../types';
import { type TreeItemProps } from '../TreeItem';

import { checkIsSelected } from './utils';

type UseLogicProps = TreeItemProps;

export const useLogic = ({
  id,
  value = [],
  level,
  isInitialExpanded,
  expandedLevel,
  chainsToSelectedItem = [],
  disabledItems,
  onChange,
}: UseLogicProps) => {
  const isSelected = checkIsSelected(value, id);

  const flatChainsToSelectedItem: MultipleValue = chainsToSelectedItem?.reduce(
    (acc, chain: MultipleValue) => [...(acc || []), ...(chain || [])],
    [],
  );

  const isDefaultExpanded =
    flatChainsToSelectedItem?.includes(id) ||
    (isInitialExpanded && level <= expandedLevel - 1);

  const disabledItem = disabledItems?.find((item) => item.id === id);
  const isDisabled = Boolean(disabledItem);
  const disableReason = disabledItem?.disableReason;

  const nextLevel = level + 1;

  const handleChange = () => {
    if (isDisabled) {
      return;
    }

    if (value.includes(id)) {
      return onChange(value.filter((selectedId) => selectedId !== id));
    }

    onChange([...value, id]);
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
