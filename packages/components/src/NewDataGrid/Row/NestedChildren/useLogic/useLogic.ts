import { type MouseEvent, useState } from 'react';

import type { CellValue } from '../../../types';
import { type NestedChildrenProps } from '../NestedChildren';

type UseLogicParams<TData extends Record<string, CellValue>> =
  NestedChildrenProps<TData>;

export const useLogic = <TData extends Record<string, CellValue>>({
  data,
  level,
  initialVisibleChildrenCount,
}: UseLogicParams<TData>) => {
  const [isShowAllChildren, setShowAllChildren] = useState<boolean>(false);

  const nextLevel = level + 1;

  const initialVisibleChildren = data?.slice(0, initialVisibleChildrenCount);
  const otherChildren = data?.slice(initialVisibleChildrenCount);

  const isOtherChildren = Boolean(otherChildren?.length);

  const handleToggleShowAllChildren = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setShowAllChildren((currentState) => !currentState);
  };

  return {
    isShowAllChildren,
    isOtherChildren,
    initialVisibleChildren,
    otherChildren,
    nextLevel,
    handleToggleShowAllChildren,
  };
};
