import { RefObject, SyntheticEvent } from 'react';

import { useToggle } from '../useToggle';
import { useClickAwayEffect } from '../useClickAwayEffect';
import { useFocusAwayEffect } from '../useFocusAwayEffect';
import { CloseEventReason } from '../../types';
import { useEscapeClickEffect } from '../useEscapeClickEffect';

export type UseInputPopperHooksOptions = {
  /**
   * @description реф на отслеживаемую ноду, эвенты вне которого будут приводить к закрытию поппера
   */
  ref: RefObject<HTMLElement>;
  /**
   * @description коллбэк на открытие поппера
   */
  onOpen?: () => void;
  /**
   * @description коллбэк на закрытие поппера
   */
  onClose?: (
    _?: SyntheticEvent<Element, Event> | Event,
    reason?: CloseEventReason,
  ) => void;
  /**
   * @description коллбэк обработки на блюр, будет вызван единожды в 3х случаях:
   *
   * - если поппер открыт и пользователь ткнул куда-то вне отслеживаемого ref
   * - если поппер открыт и пользователь протыкал табом куда-то вне отслеживаемого ref
   * - если поппер закрыт, пользователь сфокусирован на инпуте,
   * пользователь эмитит блюр, сфокусировавшись на элементе вне отслеживаемого ref
   */
  onBlur?: () => void;
};

/**
 * @description хук объединяюший в себе сопутствующие хуки для использования поппера с каким нибудь инпутом
 */
export const useInputPopper = ({
  ref,
  onOpen,
  onClose,
  onBlur,
}: UseInputPopperHooksOptions) => {
  // флаг активности поппера и методы управления
  const [isOpenPopper, openPopper, closePopper] = useToggle({
    onActive: onOpen,
    onInactive: onClose,
  });

  // флаг активности пользовательского сценария и методы управления
  const [isInProgress, openProgress, closeProgress] = useToggle();

  // метод активации, если пользователь сфокусировался или кликнул на инпут,
  // открываем поппер и включаем оба флага активности
  const handleActivate = !isOpenPopper
    ? () => {
        openPopper();
        openProgress();
      }
    : openProgress;

  // метод закрытия с эмитом onBlur, используем когда пользователь покидает отслеживаемый ref,
  // останавливает пользовательский сценарий
  const handleCloseByAway = (e: Event, reason: CloseEventReason) => {
    onBlur?.();

    if (isOpenPopper) {
      closePopper(e, reason);
    }

    closeProgress();
  };

  // отслеживаем клик снаружи, останавливает пользовательский сценарий
  // активность по флагу поппера
  useClickAwayEffect({
    ref,
    onClickAway: handleCloseByAway,
    isActive: isOpenPopper,
  });

  // отслеживаем эвенты фокуса, срабатывания останавливают пользовательский сценарий
  // активность по флагу пользовательского сценария, т.к. пользователь может закрыть поппер,
  // но остаться на инпуте компонента
  useFocusAwayEffect({
    ref,
    onFocusAway: handleCloseByAway,
    isActive: isInProgress,
  });

  // отслеживаем клик Esc, не останавливает пользовательский сценарий
  // активность по флагу поппера
  useEscapeClickEffect({
    onEscape: closePopper,
    isActive: isOpenPopper,
    preventBubbling: true,
  });

  return { isOpenPopper, openPopper: handleActivate, closePopper };
};
