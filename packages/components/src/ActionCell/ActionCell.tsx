import { type MouseEventHandler, useCallback } from 'react';

import { type TooltipProps } from '../Tooltip';

import { Wrapper } from './styles';
import { SecondaryActions } from './SecondaryActions';
import {
  type MainActionWithDisableReason,
  type NestedAction,
  type SecondaryAction,
  type SingleAction,
} from './types';
import { MainAction } from './MainAction';

export type Actions<T> = {
  /**
   * Основные действия
   */
  main: MainActionWithDisableReason<T>[];
  /**
   * Второстепенные действия
   */
  secondary?: SecondaryAction<T>[];
};

export type ActionsCellProps<T> = {
  /**
   * Действия
   */
  actions: Actions<T>;
  /**
   * Данные строки из DataGrid
   */
  row: T;
  /**
   * Позиция тултипа
   */
  tooltipPlacement?: TooltipProps['placement'];
};

export function ActionCell<T>({
  actions: { main = [], secondary = [] },
  row,
  tooltipPlacement,
}: ActionsCellProps<T>) {
  const handleActionClick = useCallback(
    (onClick: SingleAction<T>['onClick'] | NestedAction<T>['onClick']) =>
      () => {
        onClick?.(row);
      },
    [row],
  );

  const handleActionCellClick: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <Wrapper onClick={handleActionCellClick}>
      {main.map((action) => (
        <MainAction<T>
          action={action}
          key={action.name}
          tooltipPlacement={tooltipPlacement}
          onActionClick={handleActionClick}
        />
      ))}
      <SecondaryActions<T>
        secondaryActions={secondary}
        onActionClick={handleActionClick}
        tooltipPlacement={tooltipPlacement}
      />
    </Wrapper>
  );
}
