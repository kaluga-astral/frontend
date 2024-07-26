import { type MouseEvent, useContext } from 'react';

import { DataGridContext } from '../../../DataGridContext';
import type { CellValue } from '../../../types';
import { type NestedChildrenProps } from '../NestedChildren';

type UseLogicParams<TData extends Record<string, CellValue>> =
  NestedChildrenProps<TData>;

export const useLogic = <TData extends Record<string, CellValue>>({
  rowId,
  data,
  level,
  initialVisibleChildrenCount,
}: UseLogicParams<TData>) => {
  const { checkIsMoreOpened, toggleOpenMoreItems } =
    useContext(DataGridContext);

  const nextLevel = level + 1;

  const initialVisibleChildren = data?.slice(0, initialVisibleChildrenCount);
  const otherChildren = data?.slice(initialVisibleChildrenCount);

  const isShowAllChildren = checkIsMoreOpened(rowId);

  const handleToggleShowAllChildren = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    toggleOpenMoreItems(rowId);
  };

  return {
    isShowAllChildren,
    initialVisibleChildren,
    otherChildren,
    nextLevel,
    handleToggleShowAllChildren,
  };
};
