import { type MouseEventHandler, useCallback } from 'react';

import { type ActionsCellProps } from '../ActionCell';
import { type NestedAction, type SingleAction } from '../types';

type UseLogicParams<Action> = ActionsCellProps<Action>;

export const useLogic = <T>({ actions, row }: UseLogicParams<T>) => {
  const { main, secondary, isBlockingOperation = false } = actions;

  const isLoading = main.some((action) => {
    if ('actions' in action) {
      return false;
    }

    return action?.loading;
  });

  const handleActionClick = useCallback(
    (onClick: SingleAction<T>['onClick'] | NestedAction<T>['onClick']) =>
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
