import { useEffect, useMemo } from 'react';

import { useCollapse } from '../hooks';
import { type CheckedTreeItemProps } from '../types';

import {
  checkIsIndeterminate,
  checkIsSelected,
  getAllChildrenId,
} from './utils';

type UseLogicProps = Pick<
  CheckedTreeItemProps,
  'id' | 'value' | 'children' | 'onChange'
>;

export const useLogic = ({ id, value, children, onChange }: UseLogicProps) => {
  const { isOpen, handleToggle } = useCollapse();

  const childrenIds = useMemo(() => getAllChildrenId(children), [children]);
  const isSelected = checkIsSelected(value, id);
  const isIndeterminate = checkIsIndeterminate(value, childrenIds);

  useEffect(() => {
    if (!childrenIds.length) {
      return undefined;
    }

    const isEveryChildChecked = childrenIds.every((childrenId) =>
      value?.includes(childrenId),
    );

    if (isEveryChildChecked) {
      onChange?.((selectedIds) => [...(selectedIds || []), id]);
    }

    if (!isEveryChildChecked) {
      onChange?.((selectedIds = []) =>
        selectedIds?.filter((selectedId) => selectedId !== id),
      );
    }
  }, [value, childrenIds]);

  const handleChange = () => {
    onChange?.((selectedIds = []) => {
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
    isOpen,
    isSelected,
    isIndeterminate,
    handleToggle,
    handleChange,
  };
};
