import type { TooltipProps } from '../../Tooltip';
import { ActionTooltip } from '../styles';
import { IconDropdownButton } from '../../IconDropdownButton';
import { MenuItem } from '../../MenuItem';
import { IconButton } from '../../IconButton';
import {
  type ActionCellHandler,
  type MainActionWithDisableReason,
} from '../types';

type MainActionProps<T> = {
  action: MainActionWithDisableReason<T>;
  disabledReason?: string;
  tooltipPlacement?: TooltipProps['placement'];
  onActionClick: ActionCellHandler<T>;
};

export const MainAction = <T,>(properties: MainActionProps<T>) => {
  const { action, tooltipPlacement, onActionClick } = properties;

  if ('actions' in action) {
    const {
      name,
      icon,
      disabled: mainActionDisabled,
      disabledReason,
      actions,
    } = action;

    return (
      <ActionTooltip
        key={name}
        title={disabledReason || name}
        placement={tooltipPlacement}
        withoutContainer={!mainActionDisabled}
      >
        <IconDropdownButton
          icon={icon}
          variant="text"
          disabled={mainActionDisabled}
        >
          {actions.map(
            ({ name: nestedActionName, onClick: onClickNested, ...props }) => (
              <MenuItem
                key={nestedActionName}
                onClick={onActionClick(onClickNested)}
                {...props}
              >
                {nestedActionName}
              </MenuItem>
            ),
          )}
        </IconDropdownButton>
      </ActionTooltip>
    );
  }

  const { onClick, name, icon, nested, disabledReason, ...props } = action;

  return (
    <ActionTooltip
      key={name}
      title={disabledReason || name}
      placement={tooltipPlacement}
      withoutContainer={!props.disabled}
    >
      <IconButton variant="text" onClick={onActionClick(onClick)} {...props}>
        {icon}
      </IconButton>
    </ActionTooltip>
  );
};
