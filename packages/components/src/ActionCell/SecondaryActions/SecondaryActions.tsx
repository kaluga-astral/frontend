import { DotsVOutlineMd } from '@astral/icons';

import { IconDropdownButton } from '../../IconDropdownButton';
import { MenuItem } from '../../MenuItem';
import type { TooltipProps } from '../../Tooltip';
import { type ActionCellHandler, type SecondaryAction } from '../types';

type SecondaryActionsProps<T> = {
  secondaryActions: SecondaryAction<T>[];
  onActionClick: ActionCellHandler<T>;
  tooltipPlacement: TooltipProps['placement'];
};

export const SecondaryActions = <T,>(props: SecondaryActionsProps<T>) => {
  const { secondaryActions, onActionClick, tooltipPlacement } = props;

  if (!secondaryActions.length) {
    return null;
  }

  return (
    <IconDropdownButton icon={<DotsVOutlineMd />} variant="text">
      {secondaryActions.map(
        ({
          name,
          nested,
          disabledReason,
          href,
          onClick,
          ...secondaryActionProps
        }) => {
          const { disabled } = secondaryActionProps;

          return (
            <MenuItem
              key={name}
              onClick={onActionClick(onClick)}
              disabledReason={disabledReason}
              disabled={disabled}
              href={href}
              withoutContainer={!disabled}
              tooltipPlacement={tooltipPlacement}
              {...secondaryActionProps}
            >
              {name}
            </MenuItem>
          );
        },
      )}
    </IconDropdownButton>
  );
};
