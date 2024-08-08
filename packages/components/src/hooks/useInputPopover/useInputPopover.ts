import { type RefObject, type SyntheticEvent } from 'react';

import { useToggle } from '../useToggle';
import { useClickAwayEffect } from '../useClickAwayEffect';
import { useFocusAwayEffect } from '../useFocusAwayEffect';
import { type CloseEventReason } from '../../types';
import { useEscapeClickEffect } from '../useEscapeClickEffect';

export type UseInputPopoverOptions = {
  /**
   * реф на отслеживаемую ноду, ивенты вне которого будут приводить к закрытию поппера
   */
  ref: RefObject<HTMLElement>;
  /**
   * коллбэк на открытие поппера
   */
  onOpen?: () => void;
  /**
   * коллбэк на закрытие поппера
   */
  onClose?: (
    event?: SyntheticEvent<Element, Event> | Event,
    reason?: CloseEventReason,
  ) => void;
  /**
   * коллбэк обработки на блюр, будет вызван единожды в 3х случаях:
   *
   * - если поппер открыт и пользователь ткнул куда-то вне отслеживаемого ref
   * - если поппер открыт и пользователь протыкал табом куда-то вне отслеживаемого ref
   * - если поппер закрыт, пользователь сфокусирован на инпуте,
   * пользователь эмитит блюр, сфокусировавшись на элементе вне отслеживаемого ref
   */
  onBlur?: () => void;
};

/**
 * хук объединяюший в себе сопутствующие хуки для использования поппера с каким нибудь инпутом
 */
export const useInputPopover = ({
  ref,
  onOpen,
  onClose,
  onBlur,
}: UseInputPopoverOptions) => {
  // флаг активности поппера и методы управления
  const [isOpenPopover, openPopover, closePopover] = useToggle({
    onActive: onOpen,
    onInactive: onClose,
  });

  // флаг активности пользовательского сценария и методы управления
  const [isInProgress, openProgress, closeProgress] = useToggle();

  // метод активации, если пользователь сфокусировался или кликнул на инпут,
  // открываем поппер и включаем оба флага активности
  const handleActivate = !isOpenPopover
    ? () => {
        openPopover();
        openProgress();
      }
    : openProgress;

  // метод закрытия с эмитом onBlur, используем когда пользователь покидает отслеживаемый ref,
  // останавливает пользовательский сценарий
  const handleCloseByAway = (e: Event, reason: CloseEventReason) => {
    onBlur?.();

    if (isOpenPopover) {
      closePopover(e, reason);
    }

    closeProgress();
  };

  // отслеживаем клик снаружи, останавливает пользовательский сценарий
  // активность по флагу поппера
  useClickAwayEffect({
    ref,
    onClickAway: handleCloseByAway,
    isActive: isOpenPopover,
  });

  // отслеживаем ивенты фокуса, срабатывания останавливают пользовательский сценарий
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
    onEscape: closePopover,
    isActive: isOpenPopover,
    preventBubbling: true,
  });

  return {
    isOpenPopover: isOpenPopover,
    openPopover: handleActivate,
    closePopover: closePopover,
  };
};
