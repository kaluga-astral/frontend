import { useEffect, useMemo } from 'react';

import { type TreeItemProps } from '../../types';

import {
  checkIsIndeterminate,
  checkIsSelected,
  getAllChildrenId,
} from './utils';

type UseLogicProps = Pick<
  TreeItemProps,
  'id' | 'value' | 'children' | 'onChange'
>;

export const useLogic = ({ id, value, children, onChange }: UseLogicProps) => {
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

    console.log(id, 'isEveryChildChecked', isEveryChildChecked);

    if (!isSelected && isEveryChildChecked) {
      console.log('Add root: ', id);
      onChange?.((selectedIds) => [...(selectedIds || []), id]);
    }

    if (isSelected && !isEveryChildChecked) {
      console.log('Delete root: ', id);

      onChange?.((selectedIds = []) =>
        selectedIds.filter((selectedId) => selectedId !== id),
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
    isSelected,
    isIndeterminate,
    handleChange,
  };
};
