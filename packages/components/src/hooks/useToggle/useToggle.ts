import { useState } from 'react';

/**
 * тип обозначающий какой угодно рест аргументов
 */
type Arguments = unknown[];

/**
 * хэндлер принимающий на вход неизвестное количество аргументов, неизвестного вида
 */
type Handler<Args extends Arguments> = (...a: Args) => void;
/**
 * хэндлер на открытие с неизвестным количеством аргументов, неизвестного вида
 */
type OpenHandler<Args extends Arguments> = Handler<Args>;
/**
 * хэндлер на закрытие с неизвестным количеством аргументов, неизвестного вида
 */
type CloseHandler<Args extends Arguments> = Handler<Args>;

type UseToggleResultTuple<
  CloseArgs extends Arguments,
  OpenArgs extends Arguments,
> = [
  /**
   * флаг активности состояния
   */
  boolean,
  OpenHandler<OpenArgs>,
  CloseHandler<CloseArgs>,
];

type UseToggleOptions<
  CloseArgs extends Arguments,
  OpenArgs extends Arguments,
> = {
  /**
   * изначальное состояние активности
   */
  initialState?: boolean;
  /**
   * коллбэк на открытие
   */
  onActive?: OpenHandler<OpenArgs>;
  /**
   * коллбэк на закрытие
   */
  onInactive?: CloseHandler<CloseArgs>;
};

/**
 * хук хранящий стейт активности, и предоставляющий методы переключения с проксируемыми аргументами, позволяет уменьшить бойлерплейт код
 */
export const useToggle = <
  CloseArgs extends Arguments,
  OpenArgs extends Arguments,
>(
  params?: UseToggleOptions<CloseArgs, OpenArgs>,
): UseToggleResultTuple<CloseArgs, OpenArgs> => {
  const { initialState = false, onInactive, onActive } = params || {};
  const [isActive, setActive] = useState(initialState);

  // выставляем флаг активности в true, и проксируем все принятые аргументы
  const handleActive: OpenHandler<OpenArgs> = (...args) => {
    setActive(true);
    onActive?.(...args);
  };

  // выставляем флаг активности в false, и проксируем все принятые аргументы
  const handleInactive: CloseHandler<CloseArgs> = (...args) => {
    setActive(false);
    onInactive?.(...args);
  };

  return [isActive, handleActive, handleInactive];
};
