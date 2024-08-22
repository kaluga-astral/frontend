import { type TreeListData } from '../../../../Tree';

export const deepFind = (
  tree: Array<TreeListData>,
  callback: (item: TreeListData) => boolean,
): TreeListData | undefined => {
  for (const item of tree) {
    if (callback(item)) {
      return item;
    }

    if (item.children) {
      const result = deepFind(item.children, callback);

      if (result) {
        return result;
      }
    }
  }

  return undefined;
};
