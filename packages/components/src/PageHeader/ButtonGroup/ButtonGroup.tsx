import { DotsOutlineMd } from '@astral/icons';

import type { ButtonProps } from '../../Button';
import { Button } from '../../Button';
import type { ListItemButtonProps } from '../../ListItemButton';
import { ListItemButton } from '../../ListItemButton';
import { ListItemText } from '../../ListItemText';
import { IconDropdownButton } from '../../IconDropdownButton';

import { ButtonGroupWrapper } from './styles';

export type ButtonGroupProps = {
  main?: (Omit<ButtonProps, 'children'> & {
    text: string;
  })[];
  secondary?: (Omit<ListItemButtonProps, 'children'> & {
    text: string;
  })[];
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { main, secondary } = props;

  return (
    <ButtonGroupWrapper>
      {secondary && (
        <IconDropdownButton icon={<DotsOutlineMd />} variant="light">
          {secondary.map(({ text, ...secondaryProps }) => (
            <ListItemButton key={text} {...secondaryProps}>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </IconDropdownButton>
      )}
      {main &&
        main.map(({ text, ...mainProps }) => (
          <Button key={text} {...mainProps}>
            {text}
          </Button>
        ))}
    </ButtonGroupWrapper>
  );
};
