import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';

import { Reasons, backdropStackManager } from '../../BackdropStack';
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
    event: SyntheticEvent<Element, Event>,
    reason?: Reasons,
  ) => void;
};

type UseBackdropStackToggleFunc = (options?: Options) => ReturnElements;

export const useBackdropStackToggle: UseBackdropStackToggleFunc = ({
  id: parentId,
} = {}) => {
  const id = useRef<string>(parentId || nanoid());
  const { pop, push, remove } = backdropStackManager;

  const [isOpened, setOpened] = useState(false);
  const handleOpen = () => {
    push(id.current);
    setOpened(true);
  };

  const handleClose = (_: SyntheticEvent<Element, Event>, reason?: Reasons) => {
    setOpened(!pop(id.current, reason));
  };

  useEffect(() => () => remove(id.current), []);

  return { isOpened, handleOpen, handleClose };
};
