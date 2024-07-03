import { type ComponentProps, type ElementType } from 'react';
import { DotsOutlineMd } from '@astral/icons';

import { IconDropdownButton } from '../../../IconDropdownButton';
import { ListItemText } from '../../../ListItemText';
import {
  ListItemButton,
  type ListItemButtonProps,
} from '../../../ListItemButton';

/** Модель второстепенного экшена */
export type SecondaryAction<TSecondaryActionComponent extends ElementType> =
  Omit<ListItemButtonProps, 'children' | 'component'> & {
    /**
     * Название действия
     */
    text: string;

    /**
     * Компонент, используемый для корневого узла. Либо строка для использования элемента HTML, либо компонент
     */
    component?: TSecondaryActionComponent;
    // TODO Хак через Omit позволяет решить проблему с потерей типов для props
    // Необходимо решить в рамках тех.долга https://track.astral.ru/soft/browse/UIKIT-1451
  } & Omit<
      ComponentProps<
        ElementType extends TSecondaryActionComponent
          ? 'button'
          : TSecondaryActionComponent
      >,
      ''
    >;

export type ButtonGroupSecondaryActionProps<
  TSecondaryActionComponent extends ElementType,
> = {
  actions: SecondaryAction<TSecondaryActionComponent>[];
};

export const ButtonGroupSecondaryActions = <
  TSecondaryActionComponent extends ElementType = ElementType,
>({
  actions,
}: ButtonGroupSecondaryActionProps<TSecondaryActionComponent>) => {
  if (!Boolean(actions.length)) {
    return null;
  }

  return (
    <IconDropdownButton icon={<DotsOutlineMd />} variant="light">
      {actions.map(({ text, ...secondaryProps }) => (
        <ListItemButton {...secondaryProps} key={text}>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </IconDropdownButton>
  );
};
