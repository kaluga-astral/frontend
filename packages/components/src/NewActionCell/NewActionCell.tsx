import { SecondaryActions } from '../ActionCell/SecondaryAction';
import { type TooltipProps } from '../Tooltip';

import type { MainActionKind, SecondaryActionKind } from './types';
import { useLogic } from './useLogic';
import { Wrapper } from './styles';
import { MainAction } from './MainAction';

export type Actions<TAction> = {
  /**
   * Основные действия
   */
  main: MainActionKind<TAction>[];
  /**
   * Вторичные действия
   */
  secondary?: SecondaryActionKind<TAction>[];
};

export type NewActionCellProps<TRow> = {
  /**
   * Действия
   */
  actions: Actions<TRow>;
  /**
   * Данные строки NewDataGrid
   */
  row: TRow;
};

const TOOLTIP_PLACEMENT: Record<string, TooltipProps['placement']> = {
  mainAction: 'top',
  secondaryAction: 'left',
};

export const NewActionCell = <TRow,>(props: NewActionCellProps<TRow>) => {
  const { isDisabledAction, handleWrapperClick, handleActionClick } =
    useLogic(props);

  const { actions } = props;

  const { main, secondary } = actions;

  return (
    <Wrapper onClick={handleWrapperClick}>
      {main.map((action) => {
        return (
          <MainAction
            key={action.name}
            action={action}
            onActionClick={handleActionClick}
            isDisabled={isDisabledAction}
            tooltipPlacement={TOOLTIP_PLACEMENT.mainAction}
          />
        );
      })}
      {secondary && (
        <SecondaryActions
          actions={secondary}
          onActionClick={handleActionClick}
          tooltipPlacement={TOOLTIP_PLACEMENT.secondaryAction}
          isDisabled={isDisabledAction}
        />
      )}
    </Wrapper>
  );
};
