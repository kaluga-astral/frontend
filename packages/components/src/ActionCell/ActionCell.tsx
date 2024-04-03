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

  const handleWrapperClick: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <Wrapper onClick={handleWrapperClick}>
      {main.map((action) => {
        return (
          <MainAction
            key={action.name}
            tooltipPlacement={tooltipPlacement}
            onActionClick={handleActionClick}
            action={action}
          />
        );
      })}
      <SecondaryActions
        actions={secondary}
        tooltipPlacement={tooltipPlacement}
        onActionClick={handleActionClick}
      />
    </Wrapper>
  );
}
