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
  value,
  level,
  isInitialExpanded,
  expandedLevel,
  disabledItems,
  onChange,
}: UseLogicProps) => {
  const isSelected = checkIsSelected(value, id);

  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;
  const isDisabled = disabledItems?.includes(id);

  const nextLevel = level + 1;

  const handleChange = () => {
    onChange((selectedIds = []) => {
      if (selectedIds.includes(id)) {
        return selectedIds.filter((selectedId) => selectedId !== id);
      }

      return [...selectedIds, id];
    });
  };

  return {
    isSelected,
    isDefaultExpanded,
    isDisabled,
    nextLevel,
    handleChange,
  };
};
