import { type MouseEventHandler, useCallback } from 'react';

import { type NewActionCellProps } from '../NewActionCell';
import { type NestedAction, type SingleAction } from '../../ActionCell/types';

type UseLogicParams<TRowData> = NewActionCellProps<TRowData>;

export const useLogic = <TRowData>({
  row,
  actions,
}: UseLogicParams<TRowData>) => {
  const { main } = actions;

  const isBlockingOperation = main.some((action) => {
    if ('actions' in action) {
      return false;
    }

    return action.isBlockingOperation && action.loading;
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

  return { isBlockingOperation, handleActionClick, handleWrapperClick };
};
