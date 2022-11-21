import { DotsOutlineMd } from '@astral/icons';

import { Button, ButtonProps } from '../../Button';
import { ListItemButton, ListItemButtonProps } from '../../ListItemButton';
import { ListItemText } from '../../ListItemText';
import { IconDropdownButton } from '../../IconDropdownButton';

import { ButtonGroupsWrapper } from './styles';

export type ButtonGroupProps = {
  main?: (Pick<
    ButtonProps,
    | 'color'
    | 'disabled'
    | 'onClick'
    | 'startIcon'
    | 'endIcon'
    | 'loading'
    | 'selected'
    | 'variant'
    | 'component'
  > & {
    text: string;
  })[];
  secondary?: (Pick<
    ListItemButtonProps,
    'disabled' | 'onClick' | 'component'
  > & {
    text: string;
  })[];
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { main, secondary } = props;

  return (
    <ButtonGroupsWrapper>
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
    </ButtonGroupsWrapper>
  );
};
