import {
  type MouseEventHandler,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import { RowContext } from '../../NewDataGrid';
import { type ActionCellProps } from '../NewActionCell';
import type { NestedAction, SingleAction } from '../types';

type UseLogicParams<TRowData> = ActionCellProps<TRowData>;

export const useLogic = <TRowData>({
  row,
  actions,
}: UseLogicParams<TRowData>) => {
  const { main, secondary } = actions;

  const { addDisabledRow, removeDisabledRow } = useContext(RowContext);

  const blockingAction = [...main, ...(secondary || [])].find(
    (action) => action.isBlockingOperation && action.loading,
  );

  const isDisabledAction = Boolean(blockingAction);

  useEffect(() => {
    if (blockingAction) {
      return addDisabledRow(blockingAction?.loadingNote);
    }

    removeDisabledRow();
  }, [blockingAction]);

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

  return { isDisabledAction, handleActionClick, handleWrapperClick };
};
