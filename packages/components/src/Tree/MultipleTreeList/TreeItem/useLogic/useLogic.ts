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
  | 'selectStrategy'
  | 'onChange'
>;

export const useLogic = ({
  id,
  value,
  children,
  level,
  isInitialExpanded,
  expandedLevel,
  selectStrategy,
  onChange,
}: UseLogicProps) => {
  const childrenIds = useMemo(() => getAllChildrenId(children), [children]);
  const isSelected = checkIsSelected(value, id);
  const isIndeterminate = checkIsIndeterminate(value, childrenIds);

  const isEveryChildChecked = childrenIds.every((childrenId) =>
    value?.includes(childrenId),
  );

  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;
  const isStrategyNoChildren = Object.is(selectStrategy, 'no-children');
  const isVisibleSelectChildrenButton =
    isStrategyNoChildren && !isEveryChildChecked;

  useEffect(() => {
    if (!childrenIds.length || isStrategyNoChildren) {
      return undefined;
    }

    if (!isSelected && isEveryChildChecked) {
      onChange((selectedIds = []) => [...selectedIds, id]);
    }

    if (isSelected && !isEveryChildChecked) {
      onChange((selectedIds = []) =>
        selectedIds.filter((selectedId) => selectedId !== id),
      );
    }
  }, [value, childrenIds, isEveryChildChecked]);

  const handleSelectChildren = () => {
    onChange((selectedIds = []) => {
      const newAddingIds = childrenIds.filter(
        (childrenId) => !selectedIds.includes(childrenId),
      );

      return [...selectedIds, ...newAddingIds];
    });
  };

  const handleChange = () => {
    if (!childrenIds.length || isStrategyNoChildren) {
      onChange((selectedIds = []) => {
        if (selectedIds.includes(id)) {
          return selectedIds.filter((selectedId) => selectedId !== id);
        }

        return [...selectedIds, id];
      });

      return;
    }

    onChange((selectedIds = []) => {
      if (selectedIds.includes(id)) {
        return selectedIds.filter(
          (selectedId) => ![id, ...childrenIds].includes(selectedId),
        );
      }

      return [...selectedIds, id, ...childrenIds];
    });
  };

  return {
    isSelected,
    isIndeterminate,
    isDefaultExpanded,
    isVisibleSelectChildrenButton,
    handleSelectChildren,
    handleChange,
  };
};
