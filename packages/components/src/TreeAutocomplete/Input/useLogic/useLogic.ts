import { type ForwardedRef, type SyntheticEvent } from 'react';

import { useForwardedRef } from '../../../hooks';
import { type InputProps } from '../Input';

type UseLogicParams = InputProps;

export const useLogic = ({
  value,
  inputRef: externalInputRef,
  onChange,
}: UseLogicParams) => {
  const inputRef = useForwardedRef<HTMLInputElement>(
    externalInputRef as ForwardedRef<HTMLInputElement>,
  );

  const handleClearAll = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange?.('');
    inputRef.current?.focus();
  };

  const isVisibleClearButton = Boolean(value);

  return {
    inputRef,
    isVisibleClearButton,
    handleClearAll,
  };
};
