import { SyntheticEvent, useEffect, useRef, useState } from 'react';

import { backdropStackManager } from '../../services/BackdropStackManager';
import { Reason } from '../../../types';
/**
 * @description необязательные настройки для использоввания хука
 */
type Options = {
  /**
   * @default undefined
   * @description айдишка, которая записывается в стек при открытии, если не передана, будет сгенерирована автоматически
   */
  id?: string;
};

type ReturnElements = {
  /**
   * @initial false
   * @description стейт для контроля состояния открытости элемента, следует использовать, если у элемента могут быть свои дочерние всплываемые элементы
   */
  isOpened: boolean;
  /**
   * @description метод вызываемый при открытии элемента
   */
  handleOpen: () => void;
  /**
   * @description метод вызываемый при закрытии элемента, внутри него определяется состояние isOpened
   */
  handleClose: (
    event?: SyntheticEvent<Element, Event> | Event | {},
    reason?: Reason,
  ) => void;
};

type UseBackdropStackToggleFunc = (options?: Options) => ReturnElements;

/**
 * @description хук предназначен для быстрого использования backdropStackManager в реакт компонентах, хранит неуправляемый стейт, если вам нужно управлять этим стейтом, воспользуйтесь backdropStackManager в своем компоненте напрямую.
 */
export const useBackdropStackToggle: UseBackdropStackToggleFunc = ({
  id: parentId,
} = {}) => {
  const { pop, push, remove, generateID } = backdropStackManager;

  const id = useRef<string>(parentId || generateID());

  const [isOpened, setOpened] = useState(false);
  const handleOpen = () => {
    if (!isOpened) {
      push(id.current);
      setOpened(true);
    }
  };

  const handleClose = (
    _?: SyntheticEvent<Element, Event> | Event | {},
    reason?: Reason,
  ) => {
    if (isOpened) {
      setOpened(!pop(id.current, reason));
    }
  };

  useEffect(() => () => remove(id.current), []);

  return { isOpened, handleOpen, handleClose };
};
