import { type ElementType } from 'react';

import {
  ButtonGroupMainActions,
  type MainAction,
} from './ButtonGroupMainActions';
import {
  ButtonGroupSecondaryActions,
  type SecondaryAction,
} from './ButtonGroupSecondaryActions';
import {
  ButtonGroupSecondaryVisibleActions,
  type SecondaryVisibleAction,
} from './ButtonGroupSecondaryVisibleActions';
import { Wrapper } from './styles';

export type ButtonGroupProps<
  TMainActionComponent extends ElementType,
  TSecondaryActionComponent extends ElementType,
> = {
  /**
   * Основные действия
   */
  main?: MainAction<TMainActionComponent>[];

  /**
   * Второстепенные действия, спрятанные за троеточием
   */
  secondary?: SecondaryAction<TSecondaryActionComponent>[];

  /**
   * Видимые второстепенные действия
   */
  secondaryVisible?: SecondaryVisibleAction[];
};

export const ButtonGroup = <
  TMainActionComponent extends ElementType = ElementType,
  TSecondaryActionComponent extends ElementType = ElementType,
>({
  main,
  secondary,
  secondaryVisible,
}: ButtonGroupProps<TMainActionComponent, TSecondaryActionComponent>) => {
  return (
    <Wrapper>
      {secondary && <ButtonGroupSecondaryActions actions={secondary} />}
      {secondaryVisible && (
        <ButtonGroupSecondaryVisibleActions actions={secondaryVisible} />
      )}
      {main && <ButtonGroupMainActions actions={main} />}
    </Wrapper>
  );
};
