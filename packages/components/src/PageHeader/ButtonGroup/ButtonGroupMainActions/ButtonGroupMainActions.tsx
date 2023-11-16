import { Button, ButtonProps } from '../../../Button';
import { DropdownButton, DropdownButtonProps } from '../../../DropdownButton';
import { MenuItem, MenuItemProps } from '../../../MenuItem';

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

/** Модель основного экшена */
export type MainAction = SingleAction | MultipleAction;

export type ButtonGroupMainActionProps = {
  actions: MainAction[];
};

export const ButtonGroupMainActions = ({
  actions,
}: ButtonGroupMainActionProps) => {
  return actions.map((action) => {
    if (action.nested) {
      const { text, nested, actions: nestedActions, ...buttonProps } = action;

      return (
        <DropdownButton key={text} name={text} {...buttonProps}>
          {nestedActions.map(({ text: nestedActionText, ...nestedProps }) => (
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
  });
};
