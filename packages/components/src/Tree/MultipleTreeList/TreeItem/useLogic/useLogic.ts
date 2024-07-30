import { useEffect, useMemo } from 'react';

import { type TreeItemProps } from '../TreeItem';

import {
  checkIsIndeterminate,
  checkIsSelected,
  getAllChildrenId,
} from './utils';

type UseLogicProps = Pick<
  TreeItemProps,
  | 'id'
  | 'value'
  | 'children'
  | 'level'
  | 'isInitialExpanded'
  | 'expandedLevel'
  | 'disabledItems'
  | 'onChange'
>;

export const useLogic = ({
  id,
  value,
  children,
  level,
  isInitialExpanded,
  expandedLevel,
  disabledItems,
  onChange,
}: UseLogicProps) => {
  const childrenIds = useMemo(
    () => getAllChildrenId(children, disabledItems),
    [children],
  );
  const isSelected = checkIsSelected(value, id);
  const isIndeterminate = checkIsIndeterminate(value, childrenIds);

  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;

  const findItem =
    disabledItems && disabledItems.find((item) => item.id === id);
  const isDisabled = !!findItem;
  const disableReason = findItem?.disableReason;

  useEffect(() => {
    if (!childrenIds.length) {
      return undefined;
    }

    const isEveryChildChecked = childrenIds.every((childrenId) =>
      value?.includes(childrenId),
    );

    if (!isSelected && isEveryChildChecked) {
      onChange((selectedIds = []) => [...selectedIds, id]);
    }

    if (isSelected && !isEveryChildChecked) {
      onChange((selectedIds = []) =>
        selectedIds.filter((selectedId) => selectedId !== id),
      );
    }
  }, [value, childrenIds]);

  const handleChange = () => {
    onChange((selectedIds = []) => {
      if (children) {
        if (selectedIds.includes(id)) {
          return selectedIds.filter(
            (selectedId) => ![id, ...childrenIds].includes(selectedId),
          );
        }

        return [...selectedIds, id, ...childrenIds];
      } else {
        if (selectedIds.includes(id)) {
          return selectedIds.filter((selectedId) => selectedId !== id);
        }

        return [...selectedIds, id];
      }
    });
  };

  return {
    isSelected,
    isIndeterminate,
    isDefaultExpanded,
    isDisabled,
    disableReason,
    handleChange,
  };
};
