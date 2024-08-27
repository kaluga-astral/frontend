import { type TooltipProps } from '../Tooltip';

import { Wrapper } from './styles';
import { MainAction } from './MainAction';
import type { MainActionKind, SecondaryActionKind } from './types';
import { SecondaryActions } from './SecondaryAction';
import { useLogic } from './useLogic';

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

/**
 * @deprecated
 * Используйте NewActionCell. Причина отказа от поддержки: ActionCell не работает с контекстом NewDataGrid, и не позволяет
 * управлять состояниями строки при взаимодействии с действиями
 */
export const ActionCell = <T,>(props: ActionsCellProps<T>) => {
  const {
    isSecondaryActionsAvailable,
    handleActionClick,
    handleWrapperClick,
    isDisabledAction,
  } = useLogic(props);

  const { actions } = props;
  const { main = [], secondary = [] } = actions;

  return (
    <Wrapper onClick={handleWrapperClick}>
      {main.map((action) => {
        return (
          <MainAction
            key={action.name}
            tooltipPlacement={TOOLTIP_PLACEMENT.mainAction}
            onActionClick={handleActionClick}
            action={action}
            isDisabled={isDisabledAction}
          />
        );
      })}
      {isSecondaryActionsAvailable && (
        <SecondaryActions
          isDisabled={isDisabledAction}
          actions={secondary}
          tooltipPlacement={TOOLTIP_PLACEMENT.secondaryAction}
          onActionClick={handleActionClick}
        />
      )}
    </Wrapper>
  );
};
