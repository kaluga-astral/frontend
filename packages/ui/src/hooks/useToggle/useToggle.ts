import { SyntheticEvent, useState } from 'react';

import { Reason } from '../../BackdropStack';

type OpenHandler = () => void;
type CloseHandler = (
  _?: SyntheticEvent<Element, Event> | Event,
  reason?: Reason,
) => void;

type UseToggleResultTuple = [boolean, OpenHandler, CloseHandler];

type UseToggleOptions =
  | {
      initialState?: boolean;
      onActive?: () => void;
      onInactive?: CloseHandler;
    }
  | undefined;

/**
 * @description хук хранящий стейт активности, и предоставляющий методы переключения, позволяет уменьшить бойлерплейт код
 */

export const useToggle = (params: UseToggleOptions): UseToggleResultTuple => {
  const { initialState = false, onInactive, onActive } = params || {};
  const [isActive, setActive] = useState(initialState);

  const handleActive = () => {
    setActive(true);
    onActive?.();
  };

  const handleInactive: CloseHandler = (_, reason) => {
    setActive(false);
    onInactive?.(_, reason);
  };

  return [isActive, handleActive, handleInactive];
};
