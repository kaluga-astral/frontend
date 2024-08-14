import { DotsVOutlineMd } from '@astral/icons';

import { MenuItem } from '../../MenuItem';
import type { ActionCellHandler, SecondaryActionKind } from '../types';
import { type TooltipProps } from '../../Tooltip';
import { IconDropdownButton } from '../../IconDropdownButton';

type SecondaryActionsProps<T> = {
  actions: SecondaryActionKind<T>[];
  onActionClick: ActionCellHandler<T>;
  tooltipPlacement: TooltipProps['placement'];
  isDisabled?: boolean;
};

export const SecondaryActions = <T,>({
  actions,
  onActionClick,
  tooltipPlacement,
  isDisabled = false,
}: SecondaryActionsProps<T>) => {
  return (
    <IconDropdownButton
      icon={<DotsVOutlineMd />}
      variant="text"
      disabled={isDisabled}
    >
      {actions.map((secondaryAction) => {
        const { onClick, name } = secondaryAction;

        return (
          <MenuItem
            {...secondaryAction}
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
