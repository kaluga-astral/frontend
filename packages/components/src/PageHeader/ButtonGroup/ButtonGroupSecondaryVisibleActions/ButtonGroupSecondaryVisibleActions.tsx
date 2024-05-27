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
};

export type ButtonGroupMainActionProps = {
  actions: SecondaryVisibleAction[];
};

export const ButtonGroupSecondaryVisibleActions = ({
  actions,
}: ButtonGroupMainActionProps) => {
  return actions.map((action) => {
    const { name, icon, ...mainProps } = action;

    return (
      <Tooltip title={name}>
        <IconButton variant="light" name={name} key={name} {...mainProps}>
          {icon}
        </IconButton>
      </Tooltip>
    );
  });
};
