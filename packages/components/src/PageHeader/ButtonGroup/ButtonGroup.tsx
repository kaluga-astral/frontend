import { DotsOutlineMd } from '@astral/icons';
import { useCallback, useMemo } from 'react';

import { Button, ButtonProps } from '../../Button';
import { ListItemButton, ListItemButtonProps } from '../../ListItemButton';
import { ListItemText } from '../../ListItemText';
import { IconDropdownButton } from '../../IconDropdownButton';
import { MenuItem, MenuItemProps } from '../../MenuItem';
import { DropdownButton, DropdownButtonProps } from '../../DropdownButton';

import { ButtonGroupWrapper } from './styles';

type NestedAction = MenuItemProps & {
  /** Название действия */
  text: string;
};

type SingleAction = Omit<ButtonProps, 'children'> & {
  /** Флаг показа выпадающего списка при клике */
  nested?: false;
  /** Название действия */
  text: string;
};

type MultipleAction = Omit<DropdownButtonProps, 'children' | 'name'> & {
  /** Флаг показа выпадающего списка при клике */
  nested: true;
  /** Список действий для выпадающего списка */
  actions: NestedAction[];
  /** Название действия */
  text: string;
};

type MainAction = SingleAction | MultipleAction;

type SecondaryAction = Omit<ListItemButtonProps, 'children'> & {
  text: string;
};

export type ButtonGroupProps = {
  /** Основные действия */
  main?: MainAction[];
  /** Второстепенные действия */
  secondary?: SecondaryAction[];
};

export const ButtonGroup = ({
  main = [],
  secondary = [],
}: ButtonGroupProps) => {
  const renderMainAction = useCallback((action: MainAction) => {
    if (action.nested) {
      const { text, actions, ...buttonProps } = action;

      return (
        <DropdownButton name={text} {...buttonProps}>
          {actions.map(({ text: nestedActionText, ...nestedProps }) => (
            <MenuItem key={nestedActionText} {...nestedProps}>
              {nestedActionText}
            </MenuItem>
          ))}
        </DropdownButton>
      );
    }

    const { text, ...mainProps } = action;

    return (
      <Button key={text} {...mainProps}>
        {text}
      </Button>
    );
  }, []);

  const renderSecondaryActions = useMemo(() => {
    if (!Boolean(secondary?.length)) {
      return null;
    }

    return (
      <IconDropdownButton icon={<DotsOutlineMd />} variant="light">
        {secondary.map(({ text, ...secondaryProps }) => (
          <ListItemButton key={text} {...secondaryProps}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </IconDropdownButton>
    );
  }, [secondary]);

  return (
    <ButtonGroupWrapper>
      {renderSecondaryActions}
      {main && main.map(renderMainAction)}
    </ButtonGroupWrapper>
  );
};
