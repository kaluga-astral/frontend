import { type ButtonProps } from '../../../Button';
import { type DropdownButtonProps } from '../../../DropdownButton';
import { MenuItem, type MenuItemProps } from '../../../MenuItem';

import { MainActionButton, MainActionDropdownButton } from './styles';

type NestedAction = MenuItemProps & {
  /** Название действия */
  text: string;
};

type SingleAction = Omit<ButtonProps, 'children'> & {
  /** Флаг показа выпадающего списка при клике */
  isNested?: false;
  /** Название действия */
  text: string;
};

type MultipleAction = Omit<DropdownButtonProps, 'children' | 'name'> & {
  /** Флаг показа выпадающего списка при клике */
  isNested: true;
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
    if (action.isNested) {
      const { text, isNested, actions: nestedActions, ...buttonProps } = action;

      return (
        <MainActionDropdownButton key={text} name={text} {...buttonProps}>
          {nestedActions.map(({ text: nestedActionText, ...nestedProps }) => (
            <MenuItem key={nestedActionText} {...nestedProps}>
              {nestedActionText}
            </MenuItem>
          ))}
        </MainActionDropdownButton>
      );
    }

    const { text, ...mainProps } = action;

    return (
      <MainActionButton key={text} {...mainProps}>
        {text}
      </MainActionButton>
    );
  });
};
