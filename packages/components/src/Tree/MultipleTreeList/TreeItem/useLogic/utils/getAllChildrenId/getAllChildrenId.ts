import type { TreeListData } from '../../../../../types';
import type { DisabledItemValue } from '../../../../types';

export const getAllChildrenId = (
  children: Array<TreeListData> | undefined,
  disabledItems?: Array<DisabledItemValue>,
): Array<string> => {
  if (!children || !children?.length) {
    return [];
  }

  let ids: Array<string> = [];

  const isDisabledItems = (id: string): boolean => {
    if (!disabledItems) {
      return false;
    }

    return disabledItems.some((item) => {
      if (typeof item === 'string') {
        return item === id;
      } else {
        return item.id === id;
      }
    });
  };
  const traverse = (
    items: Array<TreeListData>,
    isExternalDisabled?: boolean | undefined,
  ) => {
    items.forEach((item) => {
      const isDisabled = isExternalDisabled || isDisabledItems(item.id);

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
