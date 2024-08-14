import { type MouseEventHandler, useCallback } from 'react';

import { type ActionsCellProps } from '../ActionCell';
import type { NestedAction, SingleAction } from '../types';

type UseLogicParams<TRowData> = ActionsCellProps<TRowData>;

export const useLogic = <TRowData>({
  actions,
  row,
}: UseLogicParams<TRowData>) => {
  const { main, secondary, isBlockingOperation = false } = actions;

  const isLoading = main.some((action) => {
    if ('actions' in action) {
      return false;
    }

    return action?.loading;
  });

  const handleActionClick = useCallback(
    (
      onClick:
        | SingleAction<TRowData>['onClick']
        | NestedAction<TRowData>['onClick'],
    ) =>
      () => {
        onClick?.(row);
      },
    [row],
  );

  const handleWrapperClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  const isSecondaryActionsAvailable = secondary && secondary.length >= 1;

  const isDisabledAction = isLoading && isBlockingOperation;

  return {
    isSecondaryActionsAvailable,
    handleActionClick,
    handleWrapperClick,
    isDisabledAction,
  };
};
