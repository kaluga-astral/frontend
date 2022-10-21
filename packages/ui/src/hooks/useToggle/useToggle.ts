import { useState } from 'react';

type Arguments = unknown[];

type Handler<T extends Arguments> = (...a: T) => void;
type OpenHandler<T extends Arguments> = Handler<T>;
type CloseHandler<T extends Arguments> = Handler<T>;

type UseToggleResultTuple<C extends Arguments, O extends Arguments> = [
  boolean,
  OpenHandler<O>,
  CloseHandler<C>,
];

type UseToggleOptions<C extends Arguments, O extends Arguments> = {
  initialState?: boolean;
  onActive?: OpenHandler<O>;
  onInactive?: CloseHandler<C>;
};

/**
 * @description хук хранящий стейт активности, и предоставляющий методы переключения, позволяет уменьшить бойлерплейт код
 */

export const useToggle = <C extends Arguments, O extends Arguments>(
  params?: UseToggleOptions<C, O>,
): UseToggleResultTuple<C, O> => {
  const { initialState = false, onInactive, onActive } = params || {};
  const [isActive, setActive] = useState(initialState);

  const handleActive: OpenHandler<O> = (...args) => {
    setActive(true);
    onActive?.(...args);
  };

  const handleInactive: CloseHandler<C> = (...args) => {
    setActive(false);
    onInactive?.(...args);
  };

  return [isActive, handleActive, handleInactive];
};
