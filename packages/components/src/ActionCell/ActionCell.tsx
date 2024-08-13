import { type TooltipProps } from '../Tooltip';

import { Wrapper } from './styles';
import { MainAction } from './MainAction';
import { type MainActionKind, type SecondaryActionKind } from './types';
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
  /**
   * Флаг для блокировки всех действий
   */
  isBlockingOperation?: boolean;
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

export function ActionCell<T>(props: ActionsCellProps<T>) {
  const {
    isBlockingAction,
    isSecondaryActionsAvailable,
    handleActionClick,
    handleWrapperClick,
  } = useLogic(props);
  const { actions } = props;
  const { main = [], secondary = [], isBlockingOperation = false } = actions;

  return (
    <Wrapper onClick={handleWrapperClick}>
      {main.map((action) => {
        return (
          <MainAction
            key={action.name}
            tooltipPlacement={TOOLTIP_PLACEMENT.mainAction}
            onActionClick={handleActionClick}
            action={action}
            isBlockingOperation={isBlockingOperation && isBlockingAction}
          />
        );
      })}
      {isSecondaryActionsAvailable && (
        <SecondaryActions
          isBlockingOperation={isBlockingOperation && isBlockingAction}
          actions={secondary}
          tooltipPlacement={TOOLTIP_PLACEMENT.secondaryAction}
          onActionClick={handleActionClick}
        />
      )}
    </Wrapper>
  );
}
