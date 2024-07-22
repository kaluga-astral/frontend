import { type MouseEvent, useState } from 'react';

import { type NestedChildrenProps } from '../NestedChildren';

type UseLogicParams<TData extends Record<string, unknown>> =
  NestedChildrenProps<TData>;

export const useLogic = <TData extends Record<string, unknown>>({
  level,
}: UseLogicParams<TData>) => {
  const [isShowAllChildren, setShowAllChildren] = useState<boolean>(false);

  const nextLevel = level + 1;

  const handleToggleShowAllChildren = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setShowAllChildren((currentState) => !currentState);
  };

  return {
    isShowAllChildren,
    nextLevel,
    handleToggleShowAllChildren,
  };
};
