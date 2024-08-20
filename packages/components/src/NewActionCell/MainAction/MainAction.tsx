import type { ActionCellHandler, MainActionKind } from '../types';
import { Tooltip, type TooltipProps } from '../../Tooltip';
import { IconDropdownButton } from '../../IconDropdownButton';
import { MenuItem } from '../../MenuItem';
import { IconButton } from '../../IconButton';

type MainActionProps<TAction> = {
  /**
   *  Основные действия
   */
  action: MainActionKind<TAction>;
  /**
   *  Обработчик клика на действие
   */
  onActionClick: ActionCellHandler<TAction>;
  /**
   *  Если true, action не доступен
   */
  isDisabled?: boolean;
  /**
   *  Положение тултипа
   */
  tooltipPlacement?: TooltipProps['placement'];
};

export const MainAction = <TAction,>({
  action,
  onActionClick,
  isDisabled,
  tooltipPlacement,
}: MainActionProps<TAction>) => {
  if ('actions' in action) {
    const { disabled, icon, name, disabledReason, actions } = action;

    return (
      <Tooltip
        key={name}
        title={disabledReason || name}
        withoutContainer={!disabled}
        placement={tooltipPlacement}
      >
        <IconDropdownButton
          icon={icon}
          variant="text"
          disabled={isDisabled || disabled}
        >
          {actions.map(
            ({ name: nestedActionName, onClick: onClickNested, ...props }) => (
              <MenuItem
                {...props}
                key={nestedActionName}
                onClick={onActionClick(onClickNested)}
              >
                {nestedActionName}
              </MenuItem>
            ),
          )}
        </IconDropdownButton>
      </Tooltip>
    );
  }

  const {
    onClick,
    name,
    icon,
    disabledReason,
    disabled,
    loading,
    isBlockingOperation,
    ...actions
  } = action;

  const title = !loading && (disabledReason || name);

  return (
    <Tooltip
      key={name}
      title={title}
      withoutContainer={!disabled}
      placement={tooltipPlacement}
    >
      <IconButton
        disabled={isDisabled || disabled}
        loading={loading}
        {...actions}
        variant="text"
        onClick={onActionClick(onClick)}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
};
