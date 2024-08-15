import type { TreeListData } from '../../../../types';
import type { Value } from '../../../types';

export const getChainId = (
  tree: Array<TreeListData>,
  targetId: Value,
): string[] => {
  const chainId: string[] = [];

  const findChain = (node: TreeListData): boolean => {
    chainId.push(node.id);

    if (node.id === targetId) {
      return true;
    }

    if (node.children) {
      for (const child of node.children) {
        if (findChain(child)) {
          return true;
        }
      }
    }

    chainId.pop();

    return false;
  };

  for (const node of tree) {
    if (findChain(node)) {
      return chainId;
    }
  }

  return [];
};
