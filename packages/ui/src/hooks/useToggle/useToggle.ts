import { useState } from 'react';

type OpenHandler = () => void;
type CloseHandler = () => void;

type UseToggleResultTuple = [boolean, OpenHandler, CloseHandler];

type UseToggleOptions =
  | {
      initialState?: boolean;
      onActive?: () => void;
      onInactive?: () => void;
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

  const handleInactive = () => {
    setActive(false);
    onInactive?.();
  };

  return [isActive, handleActive, handleInactive];
};
