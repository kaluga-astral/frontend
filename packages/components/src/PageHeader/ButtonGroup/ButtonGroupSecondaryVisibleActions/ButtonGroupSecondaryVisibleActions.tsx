import { type ReactNode } from 'react';

import { type ButtonProps } from '../../../Button';
import { IconButton } from '../../../IconButton';
import { Tooltip } from '../../../Tooltip';

/** Модель второстепенного видимого экшена */
export type SecondaryVisibleAction = Omit<ButtonProps, 'children'> & {
  /** Название действия */
  name: string;
  /** Иконка */
  icon: ReactNode;
  /** Текст тултипа в случае дизейбла кнопки */
  disableReason?: string;
};

export type ButtonGroupMainActionProps = {
  actions: SecondaryVisibleAction[];
};

export const ButtonGroupSecondaryVisibleActions = ({
  actions,
}: ButtonGroupMainActionProps) => {
  return actions.map((action) => {
    const { name, icon, disableReason, disabled, ...mainProps } = action;

    return (
      <Tooltip
        key={name}
        title={disabled ? disableReason : name}
        withoutContainer={!disabled}
      >
        <IconButton
          variant="light"
          name={name}
          disabled={disabled}
          {...mainProps}
        >
          {icon}
        </IconButton>
      </Tooltip>
    );
  });
};
