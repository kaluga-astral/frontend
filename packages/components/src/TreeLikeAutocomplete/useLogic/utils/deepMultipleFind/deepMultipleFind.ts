import { type TreeListData } from '../../../../Tree';

export const deepMultipleFind = (
  tree: Array<TreeListData>,
  callback: (item: TreeListData) => boolean,
): TreeListData[] => {
  const result: TreeListData[] = [];

  for (const item of tree) {
    if (callback(item)) {
      result.push(item);
    }

    if (item.children) {
      result.push(...deepMultipleFind(item.children, callback));
    }
  }

  return result;
};
