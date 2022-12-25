import { RefObject, SyntheticEvent } from 'react';

import { useToggle } from '../useToggle';
import { useClickAwayEffect } from '../useClickAwayEffect';
import { useFocusAwayEffect } from '../useFocusAwayEffect';
import { CloseEventReason } from '../../types';
import { useEscapeClickEffect } from '../useEscapeClickEffect';

export type UsePopperHooksOptions = {
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
};

/**
 * @description хук объединяюший в себе сопутствующие хуки для поппера
 */
export const usePopperHooks = ({
  ref,
  onOpen,
  onClose,
}: UsePopperHooksOptions) => {
  const [isOpenPopper, openPopper, closePopper] = useToggle({
    onActive: onOpen,
    onInactive: onClose,
  });

  useClickAwayEffect({
    ref,
    onClickAway: closePopper,
    isActive: isOpenPopper,
  });

  useFocusAwayEffect({
    ref,
    onFocusAway: closePopper,
    isActive: isOpenPopper,
  });

  useEscapeClickEffect({
    onEscape: closePopper,
    isActive: isOpenPopper,
    preventBubbling: true,
  });

  return { isOpenPopper, openPopper, closePopper };
};
