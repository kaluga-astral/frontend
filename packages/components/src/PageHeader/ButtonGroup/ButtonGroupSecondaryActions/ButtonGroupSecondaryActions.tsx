import { type ComponentProps, type ElementType } from 'react';
import { DotsOutlineMd } from '@astral/icons';

import { IconDropdownButton } from '../../../IconDropdownButton';
import { ListItemText } from '../../../ListItemText';
import {
  ListItemButton,
  type ListItemButtonProps,
} from '../../../ListItemButton';
import { type TooltipProps } from '../../../Tooltip';

/** Модель второстепенного экшена */
export type SecondaryAction<TSecondaryActionComponent extends ElementType> =
  Omit<ListItemButtonProps, 'children' | 'component'> & {
    /**
     * Название действия
     */
    text: string;
    tooltipPlacement?: TooltipProps['placement'];
    /**
     * Текст тултипа при наведении на элемент меню
     */
    note?: string;
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

const TOOLTIP_PLACEMENT = 'right';

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
        <ListItemButton
          tooltipPlacement={TOOLTIP_PLACEMENT}
          {...secondaryProps}
          key={text}
        >
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </IconDropdownButton>
  );
};
