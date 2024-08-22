import { type TreeListData } from '../../../../../Tree';

const defaultFilterOptions = (node: TreeListData, searchValue: string) => {
  if (typeof node.label !== 'string') {
    return;
  }

  return node.label.includes(searchValue);
};

export const findInTree = (
  tree: Array<TreeListData>,
  searchValue: string,
  filterOptions?: (node: TreeListData, searchValue: string) => boolean,
) => {
  const compareFunc = filterOptions || defaultFilterOptions;

  const search = (nodes: Array<TreeListData>): Array<TreeListData> => {
    let results = [];

    for (let node of nodes) {
      // Если label включает искомый термин, добавляем узел в результаты
      if (compareFunc(node, searchValue)) {
        results.push({ ...node, options: { isDefaultExpanded: false } });

        // Если узел соответствует поиску, пропускаем обработку его потомков
        continue;
      }

      // Если у узла есть потомки, рекурсивно ищем в них
      if (node.children) {
        const childResults = search(node.children);

        if (childResults.length > 0) {
          // Добавляем узел только один раз с найденными потомками
          results.push({
            ...node,
            children: childResults,
          });
        }
      }
    }

    return results;
  };

  return search(tree);
};
