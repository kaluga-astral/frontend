import { useState } from 'react';

import { type TreeAutocompleteProps } from '../TreeAutocomplete';

import { deepFind } from './utils';

type UseLogicProps = TreeAutocompleteProps;

export const useLogic = ({ value, options }: UseLogicProps) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const valueToRender = value
    ? deepFind(options, ({ id }) => Object.is(value, id))?.label
    : '';

  return {
    inputProps: {
      value: valueToRender,
      onClick: handleOpen,
    },
    optionsModalProps: {
      isOpen,
      onClose: handleClose,
    },
  };
};
