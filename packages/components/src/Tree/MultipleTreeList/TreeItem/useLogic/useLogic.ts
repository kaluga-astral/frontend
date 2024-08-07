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
  value = [],
  children,
  level,
  isInitialExpanded,
  expandedLevel,
  disabledItems,
  onChange,
}: UseLogicProps) => {
  const childrenIds = useMemo(
    () => getAllChildrenId(children, disabledItems),
    [children, disabledItems],
  );
  const isSelected = checkIsSelected(value, id);
  const isIndeterminate = checkIsIndeterminate(value, childrenIds);

  const isDefaultExpanded = isInitialExpanded && level <= expandedLevel - 1;

  const disabledItem = disabledItems?.find((item) => item.id === id);
  const isDisabled = Boolean(disabledItem);
  const disableReason = disabledItem?.disableReason;

  useEffect(() => {
    if (!childrenIds.length) {
      return undefined;
    }

    const isEveryChildChecked = childrenIds.every((childrenId) =>
      value?.includes(childrenId),
    );

    if (!isSelected && isEveryChildChecked) {
      onChange([...value, id]);
    }

    if (isSelected && !isEveryChildChecked) {
      onChange(value.filter((selectedId) => selectedId !== id));
    }
  }, [value, childrenIds]);

  const handleChange = () => {
    if (children) {
      if (value.includes(id)) {
        return onChange(
          value.filter(
            (selectedId) => ![id, ...childrenIds].includes(selectedId),
          ),
        );
      }

      onChange([...value, id, ...childrenIds]);
    } else {
      if (value.includes(id)) {
        return onChange(value.filter((selectedId) => selectedId !== id));
      }

      onChange([...value, id]);
    }
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
