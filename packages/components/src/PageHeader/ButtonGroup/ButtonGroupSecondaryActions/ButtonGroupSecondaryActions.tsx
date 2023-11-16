import { DotsOutlineMd } from '@astral/icons';

import { IconDropdownButton } from '../../../IconDropdownButton';
import { ListItemText } from '../../../ListItemText';
import { ListItemButton, ListItemButtonProps } from '../../../ListItemButton';

/** Модель второстепенного экшена */
export type SecondaryAction = Omit<ListItemButtonProps, 'children'> & {
  text: string;
};

export type ButtonGroupSecondaryActionProps = {
  actions: SecondaryAction[];
};

export const ButtonGroupSecondaryActions = ({
  actions,
}: ButtonGroupSecondaryActionProps) => {
  if (!Boolean(actions.length)) {
    return null;
  }

  return (
    <IconDropdownButton icon={<DotsOutlineMd />} variant="light">
      {actions.map(({ text, ...secondaryProps }) => (
        <ListItemButton key={text} {...secondaryProps}>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </IconDropdownButton>
  );
};
