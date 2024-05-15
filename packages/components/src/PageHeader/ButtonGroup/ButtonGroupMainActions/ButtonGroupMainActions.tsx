import React, { type ComponentProps, type ElementType } from 'react';

import { type ButtonProps } from '../../../Button';
import { type DropdownButtonProps } from '../../../DropdownButton';
import { MenuItem, type MenuItemProps } from '../../../MenuItem';

import { StyledButton, StyledDropdownButton } from './styles';

type NestedAction = MenuItemProps & {
  /** Название действия */
  text: string;
};

type SingleAction<TMainActionComponent extends ElementType> = Omit<
  ButtonProps,
  'children' | 'component'
> & {
  /**
   *  Флаг показа выпадающего списка при клике
   */
  isNested?: false;

  /**
   * Название действия
   */
  text: string;

  /**
   * Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонент
   */
  component?: TMainActionComponent;
  // TODO Хак через Omit позволяет решить проблему с потерей типов для props
  // Необходимо решить в рамках тех.долга https://track.astral.ru/soft/browse/UIKIT-1451
} & Omit<
    ComponentProps<
      ElementType extends TMainActionComponent ? 'button' : TMainActionComponent
    >,
    ''
  >;

type MultipleAction<TMainActionComponent extends ElementType> = Omit<
  DropdownButtonProps,
  'children' | 'name' | 'component'
> & {
  /**
   * Флаг показа выпадающего списка при клике
   */
  isNested: true;

  /**
   * Список действий для выпадающего списка
   */
  actions: NestedAction[];

  /**
   * Название действия
   */
  text: string;

  /**
   * Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонент
   */
  component?: TMainActionComponent;
  // TODO Хак через Omit позволяет решить проблему с потерей типов для props
  // Необходимо решить в рамках тех.долга https://track.astral.ru/soft/browse/UIKIT-1451
} & Omit<
    ComponentProps<
      ElementType extends TMainActionComponent ? 'button' : TMainActionComponent
    >,
    ''
  >;

/** Модель основного экшена */
export type MainAction<TMainActionComponent extends ElementType> =
  | SingleAction<TMainActionComponent>
  | MultipleAction<TMainActionComponent>;

export type ButtonGroupMainActionProps<
  TMainActionComponent extends ElementType,
> = {
  actions: MainAction<TMainActionComponent>[];
};

export const ButtonGroupMainActions = <
  TMainActionComponent extends ElementType = ElementType,
>({
  actions,
}: ButtonGroupMainActionProps<TMainActionComponent>) => {
  return actions.map((action) => {
    if (Object.prototype.hasOwnProperty.call(action, 'isNested')) {
      const {
        text,
        isNested,
        actions: nestedActions,
        ...buttonProps
      } = action as MultipleAction<TMainActionComponent>;

      return (
        <StyledDropdownButton {...buttonProps} key={text} name={text}>
          {nestedActions.map(({ text: nestedActionText, ...nestedProps }) => (
            <MenuItem key={nestedActionText} {...nestedProps}>
              {nestedActionText}
            </MenuItem>
          ))}
        </StyledDropdownButton>
      );
    }

    const { text, ...mainProps } = action as SingleAction<TMainActionComponent>;

    return (
      <StyledButton {...mainProps} key={text}>
        {text}
      </StyledButton>
    );
  });
};
