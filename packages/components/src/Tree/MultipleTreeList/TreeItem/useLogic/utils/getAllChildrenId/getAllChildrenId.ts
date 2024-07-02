import type { TreeListData } from '../../../../../types';
import type { MultipleValue } from '../../../../types';

export const getAllChildrenId = (
  children: Array<TreeListData> | undefined,
  disabledItems?: MultipleValue,
): Array<string> => {
  if (!children || !children?.length) {
    return [];
  }

  let ids: Array<string> = [];

  const traverse = (
    items: Array<TreeListData>,
    isExternalDisabled?: boolean | undefined,
  ) => {
    items.forEach((item) => {
      const isDisabled = isExternalDisabled || disabledItems?.includes(item.id);

      if (!isDisabled) {
        ids.push(item.id);
      }

      if (item.children) {
        traverse(item.children, isDisabled);
      }
    });
  };

  traverse(children);

  return ids;
};
