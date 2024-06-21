import type { TreeListData } from '../../../../../types';

export const getAllChildrenId = (
  children: Array<TreeListData> | undefined,
): Array<string> => {
  if (!children || !children?.length) {
    return [];
  }

  let ids: Array<string> = [];

  const traverse = (items: Array<TreeListData>) => {
    items.forEach((item) => {
      ids.push(item.id);

      if (item.children) {
        traverse(item.children);
      }
    });
  };

  traverse(children);

  return ids;
};
