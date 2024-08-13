import {
  type MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { type ActionsCellProps } from '../ActionCell';
import { type NestedAction, type SingleAction } from '../types';

type UseLogicParams<T> = ActionsCellProps<T>;

export const useLogic = <T>({ actions, row }: UseLogicParams<T>) => {
  const [isBlockingAction, setIsBlockingAction] = useState(false);
  const { main, secondary } = actions;
  const isLoading = main.some((action) => {
    if ('actions' in action) {
      return false;
    }

    return action?.loading === true;
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

  useEffect(() => {
    if (isLoading) {
      setIsBlockingAction(true);
    } else {
      setIsBlockingAction(false);
    }
  }, [isLoading]);

  return {
    isBlockingAction,
    isSecondaryActionsAvailable,
    handleActionClick,
    handleWrapperClick,
  };
};
