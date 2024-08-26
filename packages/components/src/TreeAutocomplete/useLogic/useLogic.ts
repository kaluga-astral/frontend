import { type KeyboardEvent, type SyntheticEvent, useState } from 'react';

import { type TreeAutocompleteProps } from '../TreeAutocomplete';

import { deepFind } from './utils';

type UseLogicProps = TreeAutocompleteProps;

export const useLogic = ({ value, options }: UseLogicProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = (event: SyntheticEvent<HTMLDivElement>) => {
    if (event.type === 'click') {
      return setOpen(true);
    }

    if (
      event.type === 'keydown' &&
      (event as KeyboardEvent<HTMLDivElement>).code === 'Enter'
    ) {
      return setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const valueToRender = value
    ? deepFind(options, ({ id }) => Object.is(value, id))?.label
    : '';

  return {
    inputProps: {
      value: valueToRender,
      onClick: handleOpen,
      onKeyDown: handleOpen,
    },
    optionsModalProps: {
      isOpen,
      onClose: handleClose,
    },
  };
};
