import { DotsVOutlineMd } from '@astral/icons';

import type { ActionCellHandler, SecondaryActionKind } from '../types';
import { type TooltipProps } from '../../Tooltip';
import { IconDropdownButton } from '../../IconDropdownButton';
import { MenuItem } from '../../MenuItem';

type SecondaryActionProps<TAction> = {
  /**
   *  Вторичные действия
   */
  actions: SecondaryActionKind<TAction>[];
  /**
   *  Обработчик нажатия на действие
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

export const SecondaryActions = <TAction,>({
  actions,
  onActionClick,
  tooltipPlacement,
  isDisabled,
}: SecondaryActionProps<TAction>) => {
  return (
    <IconDropdownButton
      icon={<DotsVOutlineMd />}
      variant="text"
      disabled={isDisabled}
    >
      {actions.map((action) => {
        const { onClick, name } = action;

        return (
          <MenuItem
            {...action}
            key={name}
            tooltipPlacement={tooltipPlacement}
            onClick={onActionClick(onClick)}
          >
            {name}
          </MenuItem>
        );
      })}
    </IconDropdownButton>
  );
};
