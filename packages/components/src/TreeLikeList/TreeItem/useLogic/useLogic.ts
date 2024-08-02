import { type TreeItemProps } from '../TreeItem';

import { checkIsSelected } from './utils';

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
  value = [],
  level,
  isInitialExpanded,
  expandedLevel,
  disabledItems,
  onChange,
}: UseLogicProps) => {
  const isSelected = checkIsSelected(value, id);

  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;

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
