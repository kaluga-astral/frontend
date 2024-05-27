import { type MouseEventHandler, useCallback } from 'react';

import { type TooltipProps } from '../Tooltip';

import { Wrapper } from './styles';
import { MainAction } from './MainAction';
import {
  type MainActionKind,
  type NestedAction,
  type SecondaryActionKind,
  type SingleAction,
} from './types';
import { SecondaryActions } from './SecondaryAction';

export type Actions<T> = {
  /**
   * Основные действия
   */
  main: MainActionKind<T>[];
  /**
   * Второстепенные действия
   */
  secondary?: SecondaryActionKind<T>[];
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
   * @deprecated Положение тултипа инкапсулировано внутри ActionCell
   */
  tooltipPlacement?: TooltipProps['placement'];
};

const TOOLTIP_PLACEMENT: Record<string, TooltipProps['placement']> = {
  mainAction: 'top',
  secondaryAction: 'left',
};

export function ActionCell<T>({
  actions: { main = [], secondary = [] },
  row,
}: ActionsCellProps<T>) {
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

  return (
    <Wrapper onClick={handleWrapperClick}>
      {main.map((action) => {
        return (
          <MainAction
            key={action.name}
            tooltipPlacement={TOOLTIP_PLACEMENT.mainAction}
            onActionClick={handleActionClick}
            action={action}
          />
        );
      })}
      {isSecondaryActionsAvailable && (
        <SecondaryActions
          actions={secondary}
          tooltipPlacement={TOOLTIP_PLACEMENT.secondaryAction}
          onActionClick={handleActionClick}
        />
      )}
    </Wrapper>
  );
}
