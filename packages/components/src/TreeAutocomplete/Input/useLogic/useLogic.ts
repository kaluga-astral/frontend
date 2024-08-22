import { type SyntheticEvent } from 'react';

import { type InputProps } from '../Input';

type UseLogicParams = InputProps;

export const useLogic = ({ value, onChange }: UseLogicParams) => {
  const handleClearAll = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange?.('');
  };

  const isVisibleClearButton = Boolean(value);

  return {
    isVisibleClearButton,
    handleClearAll,
  };
};
