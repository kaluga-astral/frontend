import { type TooltipProps } from '../Tooltip';

import { SecondaryActions } from './SecondaryAction';
import type { MainActionKind, SecondaryActionKind } from './types';
import { useLogic } from './useLogic';
import { Wrapper } from './styles';
import { MainAction } from './MainAction';

export type DataGridActions<TAction> = {
  /**
   * Основные действия
   */
  main: MainActionKind<TAction>[];

  /**
   * Вторичные действия
   */
  secondary?: SecondaryActionKind<TAction>[];
};

export type DataGridActionCellProps<TRow> = {
  /**
   * Действия
   */
  actions: DataGridActions<TRow>;

  /**
   * Данные строки
   */
  row: TRow;
};

const TOOLTIP_PLACEMENT: Record<string, TooltipProps['placement']> = {
  mainAction: 'top',
  secondaryAction: 'left',
};

export const DataGridActionCell = <TRow,>(
  props: DataGridActionCellProps<TRow>,
) => {
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
