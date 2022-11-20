import { DotsOutlineMd } from '@astral/icons';

import { Button, ButtonProps } from '../../Button';
import { ListItemButton, ListItemButtonProps } from '../../ListItemButton';
import { ListItemText } from '../../ListItemText';
import { IconDropdownButton } from '../../IconDropdownButton';

import { ButtonGroupsWrapper } from './styles';

export type ButtonGroupsProps = {
  mainButtons?: (Pick<
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
  secondaryButtons?: (Pick<
    ListItemButtonProps,
    'disabled' | 'onClick' | 'component'
  > & {
    text: string;
  })[];
};

export const ButtonGroups = (props: ButtonGroupsProps) => {
  const { mainButtons, secondaryButtons } = props;

  return (
    <ButtonGroupsWrapper>
      {secondaryButtons && (
        <IconDropdownButton icon={<DotsOutlineMd />} variant="light">
          {secondaryButtons.map(({ text, ...secondaryButtonProps }) => (
            <ListItemButton key={text} {...secondaryButtonProps}>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </IconDropdownButton>
      )}
      {mainButtons &&
        mainButtons.map(({ text, ...mainButtonProps }) => (
          <Button key={text} {...mainButtonProps}>
            {text}
          </Button>
        ))}
    </ButtonGroupsWrapper>
  );
};
