import type { TreeListData } from '../../../../Tree';
import type { MultipleValue } from '../../../types';

export const getChainsId = (
  tree: Array<TreeListData>,
  targetId: MultipleValue,
): string[][] => {
  const chainIds: string[][] = [];

  const findChain = (node: TreeListData, chainId: string[]): void => {
    chainId.push(node.id);

    if (targetId && targetId.includes(node.id)) {
      chainIds.push([...chainId]);

      return;
    }

    if (node.children) {
      for (const child of node.children) {
        findChain(child, [...chainId]);
      }
    }
  };

  tree.forEach((node) => findChain(node, []));

  return chainIds;
};
