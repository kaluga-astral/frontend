import { type RefObject, useEffect } from 'react';

import { type CloseEventReason } from '../../types';

type UseFocusAwayEffectOptions = {
  /**
   * реф на дом ноду, blur вне которой надо отслеживать
   */
  ref: RefObject<HTMLElement>;
  /**
   * колбэк который будет вызываться при нажатии вне рефа
   */
  onFocusAway: (e: FocusEvent, reason: CloseEventReason) => void;
  /**
   * флаг активности
   */
  isActive: boolean;
};

/**
 * хук позволяющий подписаться на потерю фокуса вне указанного рефа,
 * логика схожа с useClickAwayEffect,
 * подойдет для использования в кастомных попперах
 */
export const useFocusAwayEffect = ({
  isActive,
  onFocusAway,
  ref,
}: UseFocusAwayEffectOptions) => {
  useEffect(() => {
    const node = ref?.current;

    if (!isActive || !node) {
      return;
    }

    const handleFocus = (e: FocusEvent) => {
      if (!node.contains(e.target as HTMLElement)) {
        onFocusAway(e, 'focusAway');
      }
    };

    document.body.addEventListener('focus', handleFocus, true);

    return () => {
      document.body.removeEventListener('focus', handleFocus, true);
    };
  }, [ref, isActive, onFocusAway]);
};
