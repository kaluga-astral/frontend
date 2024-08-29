import {
  type FocusEvent,
  type KeyboardEvent,
  type SyntheticEvent,
  useState,
} from 'react';

import { type TreeAutocompleteProps } from '../TreeAutocomplete';

import { deepFind } from './utils';

type UseLogicProps = TreeAutocompleteProps;

export const useLogic = ({ value, options, onBlur }: UseLogicProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
    // Если произошла потеря фокуса, но открылась окно поиска элемента, то не вызываем onBlur, так как произойдет преждевременная валидация
    if (!isOpen) {
      onBlur?.(event);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleKeyDow = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Enter') {
      setOpen(true);
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
      onKeyDown: handleKeyDow,
    },
    optionsModalProps: {
      isOpen,
      onClose: handleClose,
    },
  };
};
