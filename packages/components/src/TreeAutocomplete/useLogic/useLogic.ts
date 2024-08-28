import {
  type FocusEvent,
  type ForwardedRef,
  type KeyboardEvent,
  type SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { type TreeAutocompleteProps } from '../TreeAutocomplete';

import { deepFind } from './utils';

type UseLogicProps = TreeAutocompleteProps;

export const useLogic = ({ value, options, onBlur }: UseLogicProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleInputBlur = (event: SyntheticEvent<HTMLInputElement>) => {
    // Если произошла потеря фокуса, но открылась окно поиска элемента, то не вызываем onBlur, так как произойдет преждевременная валидация
    if (!isOpen) {
      onBlur?.(event as FocusEvent<HTMLInputElement>);
    }
  };

  const handleOpen = (event: SyntheticEvent<HTMLInputElement>) => {
    if (event.type === 'click') {
      return setOpen(true);
    }

    if (
      event.type === 'keydown' &&
      (event as KeyboardEvent<HTMLInputElement>).code === 'Enter'
    ) {
      return setOpen(true);
    }
  };

  const handleClose = (event: SyntheticEvent<HTMLButtonElement>) => {
    onBlur?.(event as FocusEvent<HTMLInputElement>);
    setOpen(false);
  };

  const valueToRender = value
    ? deepFind(options, ({ id }) => Object.is(value, id))?.label
    : '';

  return {
    inputProps: {
      value: valueToRender,
      onBlur: handleInputBlur,
      onClick: handleOpen,
      onKeyDown: handleOpen,
    },
    optionsModalProps: {
      isOpen,
      onClose: handleClose,
    },
  };
};
