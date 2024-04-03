import { IconDropdownButton } from '../../IconDropdownButton';
import { MenuItem } from '../../MenuItem';
import { IconButton } from '../../IconButton';
import { type ActionCellHandler, type MainActionKind } from '../types';
import { Tooltip, type TooltipProps } from '../../Tooltip';

type MainActionProps<T> = {
  action: MainActionKind<T>;
  onActionClick: ActionCellHandler<T>;
  tooltipPlacement: TooltipProps['placement'];
};

export const MainAction = <T,>({
  action,
  onActionClick,
  tooltipPlacement,
}: MainActionProps<T>) => {
  if ('actions' in action) {
    const { icon, disabled, disabledReason, name, actions } = action;

    return (
      <Tooltip
        key={name}
        title={disabledReason || name}
        placement={tooltipPlacement}
        withoutContainer={!disabled}
      >
        <IconDropdownButton icon={icon} variant="text" disabled={disabled}>
          {actions.map(
            ({ name: nestedActionName, onClick: onClickNested, ...props }) => (
              <MenuItem
                {...props}
                key={nestedActionName}
                tooltipPlacement={tooltipPlacement}
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

  const { onClick, name, icon, disabledReason, disabled } = action;

  return (
    <Tooltip
      key={name}
      title={disabledReason || name}
      placement={tooltipPlacement}
      withoutContainer={!disabled}
    >
      <IconButton {...action} variant="text" onClick={onActionClick(onClick)}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
