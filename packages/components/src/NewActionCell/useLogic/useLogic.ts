import {
  type MouseEventHandler,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import { type NewActionCellProps } from '../NewActionCell';
import { type NestedAction, type SingleAction } from '../../ActionCell/types';
import { DataGridContext } from '../../NewDataGrid/DataGridContext';

type UseLogicParams<TRowData> = NewActionCellProps<TRowData>;

export const useLogic = <TRowData>({
  row,
  actions,
}: UseLogicParams<TRowData>) => {
  const { main } = actions;

  const { keyId, addDisabledRow, removeDisabledRow } =
    useContext(DataGridContext);

  const isDisabledAction = main.some((action) => {
    if ('actions' in action) {
      return false;
    }

    return action.isBlockingOperation && action.loading;
  });

  const currentKey = row[keyId as keyof TRowData] as string;

  useEffect(() => {
    const blockingAction = main.find(
      (action) =>
        !('actions' in action) && action.isBlockingOperation && action.loading,
    );

    const loadingNote = blockingAction?.loadingNote;

    if (isDisabledAction) {
      addDisabledRow(currentKey, loadingNote);
    } else {
      removeDisabledRow(currentKey);
    }
  }, [isDisabledAction, currentKey, main]);

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
