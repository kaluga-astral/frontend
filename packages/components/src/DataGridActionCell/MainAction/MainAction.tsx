import {
  type ActionComponentParams,
  ConfirmAction,
  type ConfirmActionProps,
} from '../../ConfirmAction';
import { IconButton } from '../../IconButton';
import { IconDropdownButton } from '../../IconDropdownButton';
import { MenuItem } from '../../MenuItem';
import { Tooltip, type TooltipProps } from '../../Tooltip';
import type { ActionCellHandler, MainActionKind } from '../types';

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
  console.log('action', action);

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
    name,
    icon,
    needConfirm,
    confirmText,
    confirmButtonProps,
    disabledReason,
    disabled,
    loading,
    isBlockingOperation,
    loadingNote,
    onClick,
    ...actions
  } = action;

  const title = !loading && (disabledReason || name);

  const renderButton = (
    props: ActionComponentParams | ActionCellHandler<TAction>,
  ) => (
    <IconButton
      disabled={isDisabled || disabled}
      loading={loading}
      {...actions}
      variant="text"
      {...props}
    >
      {icon}
    </IconButton>
  );

  return (
    <Tooltip
      key={name}
      title={title}
      withoutContainer={!disabled}
      placement={tooltipPlacement}
    >
      {needConfirm ? (
        <ConfirmAction
          text={confirmText}
          confirmButtonProps={confirmButtonProps}
          actionComponent={(props) => renderButton(props)}
          onConfirm={onActionClick(onClick) as ConfirmActionProps['onConfirm']}
        />
      ) : (
        renderButton({
          onClick: onActionClick(onClick) as ConfirmActionProps['onConfirm'],
        })
      )}
    </Tooltip>
  );
};
